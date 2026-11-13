'use strict';

const path = require('node:path');
const {
  BrowserWindow,
  desktopCapturer,
  dialog,
  ipcMain,
  nativeTheme,
  shell,
  systemPreferences,
  webContents: webContentsModule,
} = require('electron');
const { isTrustedOrigin } = require('./policy');

const SCREEN_RECORDING_SETTINGS = 'x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture';

// Open pickers, keyed by the picker window's webContents id.
const pickers = new Map();
let ipcRegistered = false;

function registerPickerIpc() {
  if (ipcRegistered) return;
  ipcRegistered = true;

  ipcMain.handle('picker:init', (event) => {
    const entry = pickers.get(event.sender.id);
    return entry ? entry.payload : null;
  });
  ipcMain.on('picker:choose', (event, sourceId) => {
    const entry = pickers.get(event.sender.id);
    if (entry) entry.finish(typeof sourceId === 'string' ? sourceId : null);
  });
  ipcMain.on('picker:open-settings', (event) => {
    if (pickers.has(event.sender.id)) shell.openExternal(SCREEN_RECORDING_SETTINGS);
  });
}

function screenAccessStatus() {
  return process.platform === 'darwin' ? systemPreferences.getMediaAccessStatus('screen') : 'granted';
}

function toPickerSource(source) {
  return {
    id: source.id,
    name: source.name,
    kind: source.id.startsWith('screen:') ? 'screen' : 'window',
    thumbnail: source.thumbnail && !source.thumbnail.isEmpty() ? source.thumbnail.toDataURL() : null,
    icon: source.appIcon && !source.appIcon.isEmpty() ? source.appIcon.toDataURL() : null,
  };
}

function showPicker(parent, sources, { t, appName, permissionMissing }) {
  registerPickerIpc();
  return new Promise((resolve) => {
    const attach = Boolean(parent && !parent.isDestroyed() && parent.isVisible());
    const win = new BrowserWindow({
      parent: attach ? parent : undefined,
      modal: attach,
      width: 820,
      height: 600,
      minWidth: 520,
      minHeight: 380,
      show: false,
      title: t('picker.title'),
      minimizable: false,
      maximizable: false,
      fullscreenable: false,
      backgroundColor: nativeTheme.shouldUseDarkColors ? '#1d1d21' : '#f5f5f7',
      webPreferences: {
        preload: path.join(__dirname, 'picker', 'picker-preload.js'),
        contextIsolation: true,
        sandbox: true,
        nodeIntegration: false,
        spellcheck: false,
      },
    });

    const id = win.webContents.id;
    let settled = false;
    const finish = (sourceId) => {
      if (settled) return;
      settled = true;
      pickers.delete(id);
      resolve(sources.find((source) => source.id === sourceId) || null);
      if (!win.isDestroyed()) win.close();
    };

    pickers.set(id, {
      finish,
      payload: {
        permissionMissing,
        strings: {
          title: t('picker.title'),
          screens: t('picker.screens'),
          windows: t('picker.windows'),
          share: t('picker.share'),
          cancel: t('picker.cancel'),
          empty: t('picker.empty'),
          permissionHint: t('picker.permissionHint', { name: appName }),
          openSettings: t('picker.openSettings'),
        },
        sources: sources.map(toPickerSource),
      },
    });

    win.on('closed', () => finish(null));
    win.once('ready-to-show', () => win.show());
    win.loadFile(path.join(__dirname, 'picker', 'picker.html'));
  });
}

async function explainScreenPermission(parent, { t, appName }) {
  const options = {
    type: 'warning',
    message: t('dialog.screenPermission', { name: appName }),
    detail: t('dialog.screenPermissionDetail', { name: appName }),
    buttons: [t('dialog.openSystemPreferences'), t('dialog.cancel')],
    defaultId: 0,
    cancelId: 1,
  };
  const { response } = parent ? await dialog.showMessageBox(parent, options) : await dialog.showMessageBox(options);
  if (response === 0) await shell.openExternal(SCREEN_RECORDING_SETTINGS);
}

function windowForRequest(request, fallback) {
  try {
    if (request.frame && typeof webContentsModule.fromFrame === 'function') {
      const contents = webContentsModule.fromFrame(request.frame);
      const win = contents && BrowserWindow.fromWebContents(contents);
      if (win) return win;
    }
  } catch {
    // The requesting frame may already be gone; fall back to the main window.
  }
  return fallback;
}

async function chooseStreams(request, context) {
  if (!request.videoRequested || !isTrustedOrigin(request.securityOrigin)) return null;

  const parent = windowForRequest(request, context.getMainWindow());
  const status = screenAccessStatus();
  if (status === 'denied' || status === 'restricted') {
    await explainScreenPermission(parent, context);
    return null;
  }

  const sources = await desktopCapturer.getSources({
    types: ['screen', 'window'],
    thumbnailSize: { width: 400, height: 250 },
    fetchWindowIcons: true,
  });
  const chosen = await showPicker(parent, sources, { ...context, permissionMissing: status !== 'granted' });
  return chosen ? { video: chosen } : null;
}

// Slack huddles call getDisplayMedia(); Electron leaves choosing a source to the app.
function registerScreenShare(ses, context) {
  registerPickerIpc();
  ses.setDisplayMediaRequestHandler((request, callback) => {
    chooseStreams(request, context).then(
      (streams) => callback(streams),
      (error) => {
        console.error('[screen-share]', error);
        callback(null);
      },
    );
  });
}

module.exports = { registerScreenShare, showPicker, SCREEN_RECORDING_SETTINGS };
