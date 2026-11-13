'use strict';

const SEPARATOR = { type: 'separator' };

function joinSections(sections) {
  const items = [];
  for (const section of sections) {
    if (!section || section.length === 0) continue;
    if (items.length > 0) items.push(SEPARATOR);
    items.push(...section);
  }
  return items;
}

function truncate(text, max = 24) {
  const singleLine = String(text).replace(/\s+/g, ' ').trim();
  return singleLine.length > max ? `${singleLine.slice(0, max - 1).trimEnd()}…` : singleLine;
}

// Slack's own keyboard shortcuts (⌘K, ⌘N, ⌘F, ⌘, …) must reach the page, so the menu
// only binds the shortcuts a browser or the official desktop app would.
function buildAppMenuTemplate({ t, name, isMac, settings, actions }) {
  const appMenu = {
    label: name,
    submenu: [
      { role: 'about', label: t('app.about', { name }) },
      SEPARATOR,
      {
        label: t('app.openAtLogin'),
        type: 'checkbox',
        checked: Boolean(settings.openAtLogin),
        click: (item) => actions.setOpenAtLogin(item.checked),
      },
      {
        label: t('app.showUnreadDot'),
        type: 'checkbox',
        checked: Boolean(settings.showUnreadDot),
        click: (item) => actions.setShowUnreadDot(item.checked),
      },
      {
        label: t('app.askWhereToSave'),
        type: 'checkbox',
        checked: Boolean(settings.askWhereToSave),
        click: (item) => actions.setAskWhereToSave(item.checked),
      },
      SEPARATOR,
      { role: 'services', label: t('app.services') },
      SEPARATOR,
      { role: 'hide', label: t('app.hide', { name }) },
      { role: 'hideOthers', label: t('app.hideOthers') },
      { role: 'unhide', label: t('app.showAll') },
      SEPARATOR,
      { role: 'quit', label: t('app.quit', { name }) },
    ],
  };

  const fileMenu = {
    label: t('file.menu'),
    submenu: [
      { label: t('file.openFromClipboard'), click: () => actions.openFromClipboard() },
      { label: t('file.openInBrowser'), click: () => actions.openInBrowser() },
      SEPARATOR,
      { role: 'close', label: t('file.close') },
      ...(isMac ? [] : [SEPARATOR, { role: 'quit', label: t('app.quit', { name }) }]),
    ],
  };

  const editMenu = {
    label: t('edit.menu'),
    submenu: [
      { role: 'undo', label: t('edit.undo') },
      { role: 'redo', label: t('edit.redo') },
      SEPARATOR,
      { role: 'cut', label: t('edit.cut') },
      { role: 'copy', label: t('edit.copy') },
      { role: 'paste', label: t('edit.paste') },
      { role: 'pasteAndMatchStyle', label: t('edit.pasteAndMatchStyle') },
      { role: 'delete', label: t('edit.delete') },
      { role: 'selectAll', label: t('edit.selectAll') },
      ...(isMac
        ? [
            SEPARATOR,
            {
              label: t('edit.speech'),
              submenu: [
                { role: 'startSpeaking', label: t('edit.startSpeaking') },
                { role: 'stopSpeaking', label: t('edit.stopSpeaking') },
              ],
            },
          ]
        : []),
    ],
  };

  const viewMenu = {
    label: t('view.menu'),
    submenu: [
      { label: t('view.reload'), accelerator: 'CommandOrControl+R', click: () => actions.reload() },
      { label: t('view.forceReload'), accelerator: 'CommandOrControl+Shift+R', click: () => actions.forceReload() },
      SEPARATOR,
      { label: t('view.actualSize'), accelerator: 'CommandOrControl+0', click: () => actions.resetZoom() },
      { label: t('view.zoomIn'), accelerator: 'CommandOrControl+=', click: () => actions.zoomIn() },
      // Keeps ⌘+ (Shift+=) and numpad + working; hidden items still fire on macOS.
      {
        label: t('view.zoomIn'),
        accelerator: 'CommandOrControl+Plus',
        visible: false,
        acceleratorWorksWhenHidden: true,
        click: () => actions.zoomIn(),
      },
      { label: t('view.zoomOut'), accelerator: 'CommandOrControl+-', click: () => actions.zoomOut() },
      SEPARATOR,
      { role: 'togglefullscreen', label: t('view.toggleFullScreen') },
      SEPARATOR,
      {
        label: t('view.toggleDevTools'),
        accelerator: isMac ? 'Alt+Command+I' : 'Control+Shift+I',
        click: () => actions.toggleDevTools(),
      },
    ],
  };

  const historyMenu = {
    label: t('history.menu'),
    submenu: [
      { label: t('history.back'), accelerator: 'CommandOrControl+[', click: () => actions.back() },
      { label: t('history.forward'), accelerator: 'CommandOrControl+]', click: () => actions.forward() },
      SEPARATOR,
      { label: t('history.home'), click: () => actions.home() },
    ],
  };

  const windowMenu = {
    label: t('window.menu'),
    submenu: [
      { role: 'minimize', label: t('window.minimize') },
      { role: 'zoom', label: t('window.zoom') },
      SEPARATOR,
      { label: t('window.main'), click: () => actions.showMain() },
      ...(isMac ? [SEPARATOR, { role: 'front', label: t('window.front') }] : []),
    ],
  };

  const helpMenu = {
    label: t('help.menu'),
    role: 'help',
    submenu: [
      { label: t('help.slackHelp'), click: () => actions.openHelp() },
      { label: t('help.slackStatus'), click: () => actions.openStatus() },
      SEPARATOR,
      { label: t('help.copyDiagnostics'), click: () => actions.copyDiagnostics() },
      { label: t('help.clearCache'), click: () => actions.clearCache() },
    ],
  };

  return [...(isMac ? [appMenu] : []), fileMenu, editMenu, viewMenu, historyMenu, windowMenu, helpMenu];
}

function buildContextMenuTemplate(params, { t, isMac, showInspect, actions }) {
  const flags = params.editFlags || {};
  const selection = String(params.selectionText || '').trim();
  const hasLink = /^https?:|^mailto:/i.test(params.linkURL || '');
  const isImage = params.mediaType === 'image' && Boolean(params.srcURL);

  const spelling = [];
  if (params.isEditable && params.misspelledWord) {
    const suggestions = (params.dictionarySuggestions || []).slice(0, 5);
    if (suggestions.length === 0) {
      spelling.push({ label: t('context.noSuggestions'), enabled: false });
    }
    for (const suggestion of suggestions) {
      spelling.push({ label: suggestion, click: () => actions.replaceMisspelling(suggestion) });
    }
    spelling.push({ label: t('context.addToDictionary'), click: () => actions.addToDictionary(params.misspelledWord) });
  }

  const link = hasLink
    ? [
        { label: t('context.openLink'), click: () => actions.openExternal(params.linkURL) },
        { label: t('context.copyLink'), click: () => actions.copyText(params.linkURL) },
      ]
    : [];

  const image = isImage
    ? [
        { label: t('context.copyImage'), click: () => actions.copyImageAt(params.x, params.y) },
        { label: t('context.copyImageAddress'), click: () => actions.copyText(params.srcURL) },
        { label: t('context.saveImage'), click: () => actions.saveImage(params.srcURL) },
      ]
    : [];

  const lookup = selection
    ? [
        ...(isMac ? [{ label: t('context.lookUp', { text: truncate(selection) }), click: () => actions.lookUp() }] : []),
        { label: t('context.searchGoogle', { text: truncate(selection) }), click: () => actions.searchGoogle(selection) },
      ]
    : [];

  const editing = [];
  if (params.isEditable) {
    editing.push(
      { role: 'cut', label: t('edit.cut'), enabled: Boolean(flags.canCut) },
      { role: 'copy', label: t('edit.copy'), enabled: Boolean(flags.canCopy) },
      { role: 'paste', label: t('edit.paste'), enabled: Boolean(flags.canPaste) },
      { role: 'pasteAndMatchStyle', label: t('edit.pasteAndMatchStyle'), enabled: Boolean(flags.canPaste) },
      { role: 'selectAll', label: t('edit.selectAll'), enabled: Boolean(flags.canSelectAll) },
    );
  } else if (selection) {
    editing.push({ role: 'copy', label: t('edit.copy'), enabled: Boolean(flags.canCopy) });
  }

  const developer = showInspect
    ? [{ label: t('context.inspect'), click: () => actions.inspect(params.x, params.y) }]
    : [];

  return joinSections([spelling, link, image, lookup, editing, developer]);
}

module.exports = { buildAppMenuTemplate, buildContextMenuTemplate, truncate };
