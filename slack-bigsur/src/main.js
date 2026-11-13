'use strict';

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const {
  app,
  BrowserWindow,
  Menu,
  clipboard,
  dialog,
  ipcMain,
  nativeTheme,
  screen,
  session,
  shell,
  systemPreferences,
} = require('electron');

const policy = require('./policy');
const { buildProfile } = require('./user-agent');
const { applyUserAgentOverride } = require('./ua-override');
const { computeBadge } = require('./badge');
const { pickLanguage, createTranslator } = require('./i18n');
const { buildAppMenuTemplate, buildContextMenuTemplate } = require('./menus');
const { Store } = require('./store');
const { restoreBounds, MIN_SIZE } = require('./window-state');
const { registerDownloads } = require('./downloads');
const { registerScreenShare } = require('./screen-share');

const isMac = process.platform === 'darwin';

function cliValue(name) {
  const prefix = `--${name}=`;
  const arg = process.argv.find((value) => value.startsWith(prefix));
  return arg ? arg.slice(prefix.length) : undefined;
}

const smokeTest = process.argv.includes('--smoke-test');
if (smokeTest) {
  app.setPath('userData', fs.mkdtempSync(path.join(os.tmpdir(), 'slack-bigsur-smoke-')));
}

const PRELOAD = path.join(__dirname, 'preload.js');
const OFFLINE_PAGE = path.join(__dirname, 'offline', 'offline.html');
const OFFLINE_URL = pathToFileURL(OFFLINE_PAGE).href;
const HELP_URL = 'https://slack.com/help';
const STATUS_URL = 'https://slack-status.com';
const PRIVACY_SETTINGS = {
  microphone: 'x-apple.systempreferences:com.apple.preference.security?Privacy_Microphone',
  camera: 'x-apple.systempreferences:com.apple.preference.security?Privacy_Camera',
};
const ZOOM = { step: 0.1, min: 0.5, max: 3 };
const CRASH_RELOAD_LIMIT = 3;
const CRASH_WINDOW_MS = 60 * 1000;

// Permissions Slack uses (notifications, huddles, screen sharing, clipboard, file
// uploads); anything else is denied, and only Slack's own origins get any of them.
const ALLOWED_PERMISSIONS = new Set([
  'clipboard-read',
  'clipboard-sanitized-write',
  'display-capture',
  'fileSystem',
  'fullscreen',
  'idle-detection',
  'media',
  'notifications',
  'pointerLock',
  'speaker-selection',
  'storage-access',
  'top-level-storage-access',
  'window-management',
]);

const store = new Store(path.join(app.getPath('userData'), 'settings.json'));
const profile = buildProfile({
  chromeVersion: process.env.SLACK_BIGSUR_CHROME_VERSION || store.get('chromeVersion'),
  platformVersion: store.get('platformVersion'),
});
const startUrl = [process.env.SLACK_BIGSUR_START_URL, store.get('startUrl')].find(policy.isSlackUrl) || policy.START_URL;

let language = 'en';
let t = createTranslator(language);
let mainWindow = null;
let mainWindowReady = false;
let isQuitting = false;
let downloads = null;
let mediaDialogShown = false;
const unread = { mentions: 0, unread: 0, title: '' };
let lastBadge = null;
const crashTimes = [];
const userAgentReady = new WeakMap();

app.enableSandbox();
app.userAgentFallback = profile.userAgent;

if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => showMainWindow());
  app.on('web-contents-created', (_event, contents) => hardenWebContents(contents));
  app.whenReady().then(onReady);
}

function onReady() {
  language = pickLanguage(app.getPreferredSystemLanguages());
  t = createTranslator(language);

  const ses = session.defaultSession;
  ses.setUserAgent(profile.userAgent);
  configurePermissions(ses);
  downloads = registerDownloads(ses, {
    getMainWindow: () => mainWindow,
    shouldAsk: () => store.get('askWhereToSave'),
    t,
  });
  registerScreenShare(ses, { getMainWindow: () => mainWindow, t, appName: app.getName() });
  ipcMain.on('slack:unread', onUnreadCounts);

  if (isMac) {
    app.setAboutPanelOptions({
      applicationName: app.getName(),
      applicationVersion: app.getVersion(),
      version: `Electron ${process.versions.electron}`,
      credits: t('app.aboutCredits', {
        electron: process.versions.electron,
        chromium: process.versions.chrome,
        chrome: profile.major,
      }),
    });
  }

  buildMenu();
  createMainWindow();

  app.on('activate', () => showMainWindow());
  app.on('did-become-active', () => {
    // Clicking a Slack notification activates the app; bring the hidden window back.
    if (mainWindowReady && BrowserWindow.getAllWindows().every((win) => !win.isVisible())) showMainWindow();
  });

  if (smokeTest) {
    require('./smoke-test').runSmokeTest(mainWindow, {
      profile,
      timeoutMs: Number(cliValue('smoke-timeout') || 90) * 1000,
      screenshotPath: cliValue('smoke-screenshot'),
    });
  }
}

app.on('before-quit', () => {
  isQuitting = true;
  try {
    store.flush();
  } catch (error) {
    console.error('[main] could not save settings:', error.message);
  }
});

app.on('window-all-closed', () => {
  if (!isMac) app.quit();
});

// ---------------------------------------------------------------------------
// Every web page

function slackWebPreferences() {
  return {
    preload: PRELOAD,
    contextIsolation: true,
    sandbox: true,
    nodeIntegration: false,
    webviewTag: false,
    spellcheck: true,
  };
}

function hardenWebContents(contents) {
  contents.on('will-attach-webview', (event) => event.preventDefault());
  if (contents.getType() !== 'window') return;

  contents.setUserAgent(profile.userAgent);
  userAgentReady.set(contents, applyUserAgentOverride(contents, profile));

  contents.setWindowOpenHandler((details) => handleWindowOpen(contents, details));
  contents.on('will-navigate', (event, legacyUrl) => guardNavigation(event, event.url || legacyUrl, contents));
  contents.on('context-menu', (_event, params) => showContextMenu(contents, params));
}

function handleWindowOpen(contents, { url, disposition }) {
  switch (policy.classifyWindowOpen(url, disposition)) {
    case 'in-app':
      return {
        action: 'allow',
        overrideBrowserWindowOptions: {
          width: 1100,
          height: 780,
          minWidth: MIN_SIZE.width,
          minHeight: MIN_SIZE.height,
          backgroundColor: backgroundColor(),
          webPreferences: slackWebPreferences(),
        },
      };
    case 'download':
      contents.downloadURL(url);
      break;
    case 'slack':
      loadInMainWindow(policy.slackDeepLinkToWeb(url));
      break;
    case 'external':
      openExternal(url, BrowserWindow.fromWebContents(contents));
      break;
    default:
      break;
  }
  return { action: 'deny' };
}

function guardNavigation(event, url, contents) {
  const decision = policy.classifyNavigation(url, { allowedFileUrls: [OFFLINE_URL] });
  if (decision === 'allow') return;
  event.preventDefault();
  if (decision === 'external') {
    openExternal(url, BrowserWindow.fromWebContents(contents));
  } else if (decision === 'slack') {
    const webUrl = policy.slackDeepLinkToWeb(url);
    if (webUrl) load(contents, webUrl);
  }
}

// Load failures are handled by did-fail-load; the rejected promise carries nothing more.
function load(contents, url) {
  if (!contents.isDestroyed()) contents.loadURL(url).catch(() => {});
}

async function openExternal(url, parent) {
  switch (policy.externalOpenPolicy(url)) {
    case 'open':
      return shell.openExternal(url);
    case 'slack':
      return loadInMainWindow(policy.slackDeepLinkToWeb(url));
    case 'confirm':
      if (await confirmExternalScheme(url, parent)) return shell.openExternal(url);
      return undefined;
    default:
      return undefined;
  }
}

function messageBox(parent, options) {
  return parent && !parent.isDestroyed() ? dialog.showMessageBox(parent, options) : dialog.showMessageBox(options);
}

async function confirmExternalScheme(url, parent) {
  const scheme = new URL(url).protocol.replace(/:$/, '');
  const { response } = await messageBox(parent, {
    type: 'question',
    message: t('dialog.externalScheme', { scheme }),
    detail: url.length > 300 ? `${url.slice(0, 299)}…` : url,
    buttons: [t('dialog.open'), t('dialog.cancel')],
    defaultId: 0,
    cancelId: 1,
  });
  return response === 0;
}

function showContextMenu(contents, params) {
  const win = BrowserWindow.fromWebContents(contents);
  const template = buildContextMenuTemplate(params, {
    t,
    isMac,
    showInspect: !app.isPackaged,
    actions: {
      replaceMisspelling: (word) => contents.replaceMisspelling(word),
      addToDictionary: (word) => contents.session.addWordToSpellCheckerDictionary(word),
      openExternal: (url) => openExternal(url, win),
      copyText: (text) => clipboard.writeText(text),
      copyImageAt: (x, y) => contents.copyImageAt(x, y),
      saveImage: (url) => {
        downloads.askForNext();
        contents.downloadURL(url);
      },
      lookUp: () => contents.showDefinitionForSelection(),
      searchGoogle: (text) => shell.openExternal(`https://www.google.com/search?q=${encodeURIComponent(text)}`),
      inspect: (x, y) => contents.inspectElement(x, y),
    },
  });
  if (template.length > 0) Menu.buildFromTemplate(template).popup(win ? { window: win } : {});
}

// ---------------------------------------------------------------------------
// Permissions

function configurePermissions(ses) {
  ses.setPermissionRequestHandler((contents, permission, callback, details = {}) => {
    if (permission === 'openExternal') {
      // Redirects to slack://, zoommtg:// and similar end up here.
      callback(false);
      if (details.externalURL) openExternal(details.externalURL, contents && BrowserWindow.fromWebContents(contents));
      return;
    }
    const origin = details.requestingUrl || (contents && !contents.isDestroyed() ? contents.getURL() : '');
    if (!ALLOWED_PERMISSIONS.has(permission) || !policy.isTrustedOrigin(origin)) {
      callback(false);
      return;
    }
    if (permission === 'media') {
      requestMediaAccess(details.mediaTypes || [], contents).then(callback, () => callback(false));
      return;
    }
    callback(true);
  });

  ses.setPermissionCheckHandler((_contents, permission, requestingOrigin, details = {}) => {
    return ALLOWED_PERMISSIONS.has(permission) && policy.isTrustedOrigin(requestingOrigin || details.requestingUrl);
  });
}

// macOS asks for microphone and camera access once per app; Chromium cannot capture
// anything until the user has allowed it.
async function requestMediaAccess(mediaTypes, contents) {
  if (!isMac) return true;
  const kinds = [];
  if (mediaTypes.includes('audio')) kinds.push('microphone');
  if (mediaTypes.includes('video')) kinds.push('camera');

  for (const kind of kinds) {
    const status = systemPreferences.getMediaAccessStatus(kind);
    if (status === 'granted') continue;
    if (status === 'not-determined' && (await systemPreferences.askForMediaAccess(kind))) continue;
    explainMediaPermission(kind, contents && BrowserWindow.fromWebContents(contents));
    return false;
  }
  return true;
}

async function explainMediaPermission(kind, parent) {
  if (mediaDialogShown) return;
  mediaDialogShown = true;
  const { response } = await messageBox(parent, {
    type: 'warning',
    message: t('dialog.mediaPermission', { name: app.getName() }),
    detail: t('dialog.mediaPermissionDetail', { name: app.getName() }),
    buttons: [t('dialog.openSystemPreferences'), t('dialog.cancel')],
    defaultId: 0,
    cancelId: 1,
  });
  if (response === 0) shell.openExternal(PRIVACY_SETTINGS[kind]);
}

// ---------------------------------------------------------------------------
// Main window

function backgroundColor() {
  return nativeTheme.shouldUseDarkColors ? '#1a1d21' : '#ffffff';
}

function createMainWindow() {
  const workAreas = screen.getAllDisplays().map((display) => display.workArea);
  mainWindowReady = false;
  mainWindow = new BrowserWindow({
    ...restoreBounds(store.get('windowBounds'), workAreas),
    minWidth: MIN_SIZE.width,
    minHeight: MIN_SIZE.height,
    show: false,
    title: 'Slack',
    backgroundColor: backgroundColor(),
    webPreferences: { ...slackWebPreferences(), backgroundThrottling: false },
  });
  const win = mainWindow;
  const contents = win.webContents;

  if (store.get('windowMaximized')) win.maximize();

  const reveal = () => {
    if (mainWindowReady || win.isDestroyed()) return;
    mainWindowReady = true;
    win.show();
  };
  win.once('ready-to-show', reveal);
  // Slow networks can delay the first paint for a long time; show the window anyway.
  setTimeout(reveal, 3000);

  win.on('close', (event) => {
    if (!isMac || isQuitting) return;
    // On macOS closing the window only hides it, like the official app.
    event.preventDefault();
    if (win.isFullScreen()) {
      win.once('leave-full-screen', () => win.hide());
      win.setFullScreen(false);
    } else {
      win.hide();
    }
  });
  win.on('closed', () => {
    if (mainWindow === win) mainWindow = null;
  });

  const rememberBounds = () => {
    if (win.isDestroyed() || win.isFullScreen() || win.isMinimized()) return;
    store.set('windowMaximized', win.isMaximized());
    if (!win.isMaximized()) store.set('windowBounds', win.getNormalBounds());
  };
  for (const name of ['resize', 'move', 'maximize', 'unmaximize']) win.on(name, rememberBounds);

  contents.on('page-title-updated', (_event, title) => {
    unread.title = title;
    updateBadge();
  });
  contents.on('did-finish-load', () => contents.setZoomFactor(store.get('zoomFactor') || 1));
  contents.on('zoom-changed', (_event, direction) => changeZoom(direction === 'in' ? ZOOM.step : -ZOOM.step));
  contents.on('did-fail-load', (_event, code, description, validatedUrl, isMainFrame) => {
    if (!isMainFrame || code === -3 || String(validatedUrl).startsWith('file:')) return;
    contents
      .loadFile(OFFLINE_PAGE, {
        query: { url: validatedUrl || startUrl, code: String(code), error: description, lang: language },
      })
      .catch(() => {});
  });
  contents.on('render-process-gone', (_event, details) => {
    if (details.reason === 'clean-exit') return;
    console.error(`[main] Slack page crashed (${details.reason})`);
    const now = Date.now();
    while (crashTimes.length > 0 && now - crashTimes[0] > CRASH_WINDOW_MS) crashTimes.shift();
    crashTimes.push(now);
    if (crashTimes.length <= CRASH_RELOAD_LIMIT) {
      setTimeout(() => {
        if (!win.isDestroyed()) contents.reload();
      }, 1000);
    }
  });

  loadFirstPage(contents);
}

// The client-hints override reaches a renderer only once one exists. Without the blank
// page first, Slack's first requests would carry Electron's own Sec-CH-UA values.
async function loadFirstPage(contents) {
  await contents.loadURL('about:blank').catch(() => {});
  await Promise.race([userAgentReady.get(contents), new Promise((resolve) => setTimeout(resolve, 3000))]);
  if (contents.isDestroyed()) return;
  contents.once('did-finish-load', () => contents.navigationHistory.clear());
  load(contents, startUrl);
}

function showMainWindow() {
  if (!app.isReady()) return;
  if (!mainWindow || mainWindow.isDestroyed()) {
    createMainWindow();
    return;
  }
  if (mainWindow.isMinimized()) mainWindow.restore();
  mainWindow.show();
  mainWindow.focus();
}

function loadInMainWindow(url) {
  if (!url) return;
  showMainWindow();
  if (mainWindow) load(mainWindow.webContents, url);
}

// ---------------------------------------------------------------------------
// Dock badge

function onUnreadCounts(event, counts) {
  if (!mainWindow || event.sender !== mainWindow.webContents) return;
  unread.mentions = Number(counts && counts.mentions) || 0;
  unread.unread = Number(counts && counts.unread) || 0;
  updateBadge();
}

function updateBadge() {
  const badge = computeBadge(unread, { showUnreadDot: store.get('showUnreadDot') });
  if (badge === lastBadge) return;
  lastBadge = badge;
  if (isMac && app.dock) {
    app.dock.setBadge(badge);
  } else {
    app.setBadgeCount(Number.parseInt(badge, 10) || 0);
  }
}

// ---------------------------------------------------------------------------
// Menus and their actions

function focusedContents() {
  const win = BrowserWindow.getFocusedWindow() || mainWindow;
  return win && !win.isDestroyed() ? win.webContents : null;
}

function setZoom(factor) {
  const next = Math.min(ZOOM.max, Math.max(ZOOM.min, Math.round(factor * 10) / 10));
  store.set('zoomFactor', next);
  for (const win of BrowserWindow.getAllWindows()) {
    if (!win.isDestroyed() && policy.isSlackUrl(win.webContents.getURL())) win.webContents.setZoomFactor(next);
  }
}

function changeZoom(delta) {
  setZoom((store.get('zoomFactor') || 1) + delta);
}

function diagnostics() {
  const current = focusedContents();
  let host = '';
  try {
    host = current ? new URL(current.getURL()).host : '';
  } catch {
    host = '';
  }
  return [
    `${app.getName()} ${app.getVersion()}`,
    `Electron ${process.versions.electron}, Chromium ${process.versions.chrome}, Node ${process.versions.node}`,
    `${isMac ? 'macOS' : process.platform} ${process.getSystemVersion()} (${process.arch})`,
    `User-Agent: ${profile.userAgent}`,
    `Client hints: ${profile.metadata.brands.map((entry) => `${entry.brand} ${entry.version}`).join(', ')}`,
    `Current host: ${host || '-'}`,
  ].join('\n');
}

function buildMenu() {
  const actions = {
    setOpenAtLogin: (checked) => app.setLoginItemSettings({ openAtLogin: checked }),
    setShowUnreadDot: (checked) => {
      store.set('showUnreadDot', checked);
      updateBadge();
    },
    setAskWhereToSave: (checked) => store.set('askWhereToSave', checked),
    openFromClipboard: () => {
      const link = policy.normalizeUserSlackLink(clipboard.readText());
      if (link) {
        loadInMainWindow(link);
        return;
      }
      messageBox(mainWindow, {
        type: 'info',
        message: t('dialog.noSlackLink'),
        detail: t('dialog.noSlackLinkDetail'),
        buttons: [t('dialog.ok')],
      });
    },
    openInBrowser: () => {
      const url = focusedContents() && focusedContents().getURL();
      if (url && /^https?:/.test(url)) shell.openExternal(url);
    },
    reload: () => {
      const contents = focusedContents();
      if (!contents) return;
      if (contents.getURL().startsWith('file:') && contents === (mainWindow && mainWindow.webContents)) {
        load(contents, startUrl);
      } else {
        contents.reload();
      }
    },
    forceReload: () => focusedContents() && focusedContents().reloadIgnoringCache(),
    resetZoom: () => setZoom(1),
    zoomIn: () => changeZoom(ZOOM.step),
    zoomOut: () => changeZoom(-ZOOM.step),
    toggleDevTools: () => focusedContents() && focusedContents().toggleDevTools(),
    back: () => {
      const history = focusedContents() && focusedContents().navigationHistory;
      if (history && history.canGoBack()) history.goBack();
    },
    forward: () => {
      const history = focusedContents() && focusedContents().navigationHistory;
      if (history && history.canGoForward()) history.goForward();
    },
    home: () => loadInMainWindow(startUrl),
    showMain: () => showMainWindow(),
    openHelp: () => shell.openExternal(HELP_URL),
    openStatus: () => shell.openExternal(STATUS_URL),
    copyDiagnostics: () => {
      clipboard.writeText(diagnostics());
      messageBox(mainWindow, {
        type: 'info',
        message: t('dialog.diagnosticsCopied'),
        buttons: [t('dialog.ok')],
      });
    },
    clearCache: async () => {
      await session.defaultSession.clearCache();
      if (mainWindow) mainWindow.webContents.reloadIgnoringCache();
    },
  };

  const template = buildAppMenuTemplate({
    t,
    name: app.getName(),
    isMac,
    settings: {
      openAtLogin: isMac ? app.getLoginItemSettings().openAtLogin : false,
      showUnreadDot: store.get('showUnreadDot'),
      askWhereToSave: store.get('askWhereToSave'),
    },
    actions,
  });
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}
