'use strict';

const STRINGS = {
  en: {
    'app.about': 'About {name}',
    'app.aboutCredits':
      'Runs the Slack web client on Electron {electron} (Chromium {chromium}) and presents itself to Slack as Chrome {chrome}. Not affiliated with Slack Technologies.',
    'app.openAtLogin': 'Open at Login',
    'app.showUnreadDot': 'Show Unread Dot in Dock',
    'app.askWhereToSave': 'Ask Where to Save Downloads',
    'app.services': 'Services',
    'app.hide': 'Hide {name}',
    'app.hideOthers': 'Hide Others',
    'app.showAll': 'Show All',
    'app.quit': 'Quit {name}',

    'file.menu': 'File',
    'file.openFromClipboard': 'Open Slack Link from Clipboard',
    'file.openInBrowser': 'Open Current Page in Browser',
    'file.close': 'Close Window',

    'edit.menu': 'Edit',
    'edit.undo': 'Undo',
    'edit.redo': 'Redo',
    'edit.cut': 'Cut',
    'edit.copy': 'Copy',
    'edit.paste': 'Paste',
    'edit.pasteAndMatchStyle': 'Paste and Match Style',
    'edit.delete': 'Delete',
    'edit.selectAll': 'Select All',
    'edit.speech': 'Speech',
    'edit.startSpeaking': 'Start Speaking',
    'edit.stopSpeaking': 'Stop Speaking',

    'view.menu': 'View',
    'view.reload': 'Reload',
    'view.forceReload': 'Force Reload',
    'view.actualSize': 'Actual Size',
    'view.zoomIn': 'Zoom In',
    'view.zoomOut': 'Zoom Out',
    'view.toggleFullScreen': 'Toggle Full Screen',
    'view.toggleDevTools': 'Toggle Developer Tools',

    'history.menu': 'History',
    'history.back': 'Back',
    'history.forward': 'Forward',
    'history.home': 'Slack Home',

    'window.menu': 'Window',
    'window.minimize': 'Minimize',
    'window.zoom': 'Zoom',
    'window.main': 'Slack Window',
    'window.front': 'Bring All to Front',

    'help.menu': 'Help',
    'help.slackHelp': 'Slack Help Center',
    'help.slackStatus': 'Slack System Status',
    'help.copyDiagnostics': 'Copy Diagnostic Info',
    'help.clearCache': 'Clear Cache and Reload',

    'context.openLink': 'Open Link in Browser',
    'context.copyLink': 'Copy Link',
    'context.copyImage': 'Copy Image',
    'context.copyImageAddress': 'Copy Image Address',
    'context.saveImage': 'Save Image As…',
    'context.lookUp': 'Look Up “{text}”',
    'context.searchGoogle': 'Search Google for “{text}”',
    'context.addToDictionary': 'Add to Dictionary',
    'context.noSuggestions': 'No Guesses Found',
    'context.inspect': 'Inspect Element',

    'dialog.ok': 'OK',
    'dialog.cancel': 'Cancel',
    'dialog.open': 'Open',
    'dialog.noSlackLink': 'The clipboard does not contain a Slack link.',
    'dialog.noSlackLinkDetail': 'Copy a link that starts with https://app.slack.com/, https://<workspace>.slack.com/ or slack://, then try again.',
    'dialog.externalScheme': 'Open this “{scheme}” link in another application?',
    'dialog.screenPermission': '{name} needs the Screen Recording permission',
    'dialog.screenPermissionDetail':
      'Open System Preferences › Security & Privacy › Privacy › Screen Recording, tick “{name}”, then quit and reopen the app.',
    'dialog.mediaPermission': '{name} cannot use the microphone or camera',
    'dialog.mediaPermissionDetail':
      'Open System Preferences › Security & Privacy › Privacy and allow “{name}” under Microphone and Camera.',
    'dialog.openSystemPreferences': 'Open System Preferences',
    'dialog.diagnosticsCopied': 'Diagnostic info copied to the clipboard.',
    'dialog.captchaUnavailable': 'The sign-in check (Google reCAPTCHA) could not load',
    'dialog.captchaUnavailableDetail':
      'Slack asks for a reCAPTCHA check when you sign in, but {host} could not be reached ({error}). Check your internet connection. If your network blocks Google, turn on your VPN or proxy and set it as the system proxy, then reload.',
    'dialog.captchaRetryDetail':
      '{host} could not be reached ({error}). After reloading, the check will load from Google’s alternative address.',

    'download.done': 'Download complete',
    'download.failed': 'Download failed',

    'picker.title': 'Choose what to share',
    'picker.screens': 'Entire screen',
    'picker.windows': 'Windows',
    'picker.share': 'Share',
    'picker.cancel': 'Cancel',
    'picker.empty': 'Nothing to share was found.',
    'picker.permissionHint':
      'Screen Recording permission has not been granted yet, so previews may be blank. Allow “{name}” in System Preferences › Security & Privacy › Privacy › Screen Recording, then reopen the app.',
    'picker.openSettings': 'Open System Preferences',
  },

  zh: {
    'app.about': '关于 {name}',
    'app.aboutCredits':
      '基于 Electron {electron}（Chromium {chromium}）运行 Slack 网页版，并以 Chrome {chrome} 的身份访问 Slack。与 Slack Technologies 无关。',
    'app.openAtLogin': '登录时打开',
    'app.showUnreadDot': '在 Dock 中显示未读圆点',
    'app.askWhereToSave': '下载前询问保存位置',
    'app.services': '服务',
    'app.hide': '隐藏 {name}',
    'app.hideOthers': '隐藏其他',
    'app.showAll': '全部显示',
    'app.quit': '退出 {name}',

    'file.menu': '文件',
    'file.openFromClipboard': '打开剪贴板中的 Slack 链接',
    'file.openInBrowser': '在浏览器中打开当前页面',
    'file.close': '关闭窗口',

    'edit.menu': '编辑',
    'edit.undo': '撤销',
    'edit.redo': '重做',
    'edit.cut': '剪切',
    'edit.copy': '拷贝',
    'edit.paste': '粘贴',
    'edit.pasteAndMatchStyle': '粘贴并匹配样式',
    'edit.delete': '删除',
    'edit.selectAll': '全选',
    'edit.speech': '语音',
    'edit.startSpeaking': '开始朗读',
    'edit.stopSpeaking': '停止朗读',

    'view.menu': '显示',
    'view.reload': '重新载入',
    'view.forceReload': '强制重新载入',
    'view.actualSize': '实际大小',
    'view.zoomIn': '放大',
    'view.zoomOut': '缩小',
    'view.toggleFullScreen': '切换全屏',
    'view.toggleDevTools': '开发者工具',

    'history.menu': '历史记录',
    'history.back': '后退',
    'history.forward': '前进',
    'history.home': 'Slack 主页',

    'window.menu': '窗口',
    'window.minimize': '最小化',
    'window.zoom': '缩放',
    'window.main': 'Slack 窗口',
    'window.front': '前置全部窗口',

    'help.menu': '帮助',
    'help.slackHelp': 'Slack 帮助中心',
    'help.slackStatus': 'Slack 服务状态',
    'help.copyDiagnostics': '拷贝诊断信息',
    'help.clearCache': '清除缓存并重新载入',

    'context.openLink': '在浏览器中打开链接',
    'context.copyLink': '拷贝链接',
    'context.copyImage': '拷贝图片',
    'context.copyImageAddress': '拷贝图片地址',
    'context.saveImage': '存储图片…',
    'context.lookUp': '查询“{text}”',
    'context.searchGoogle': '用 Google 搜索“{text}”',
    'context.addToDictionary': '添加到词典',
    'context.noSuggestions': '没有拼写建议',
    'context.inspect': '检查元素',

    'dialog.ok': '好',
    'dialog.cancel': '取消',
    'dialog.open': '打开',
    'dialog.noSlackLink': '剪贴板中没有 Slack 链接。',
    'dialog.noSlackLinkDetail': '请先拷贝以 https://app.slack.com/、https://<工作区>.slack.com/ 或 slack:// 开头的链接，然后重试。',
    'dialog.externalScheme': '要用其他应用打开这个“{scheme}”链接吗？',
    'dialog.screenPermission': '{name} 需要“屏幕录制”权限',
    'dialog.screenPermissionDetail':
      '请打开 系统偏好设置 › 安全性与隐私 › 隐私 › 屏幕录制，勾选“{name}”，然后退出并重新打开本应用。',
    'dialog.mediaPermission': '{name} 无法使用麦克风或摄像头',
    'dialog.mediaPermissionDetail': '请打开 系统偏好设置 › 安全性与隐私 › 隐私，在“麦克风”和“摄像头”中允许“{name}”。',
    'dialog.openSystemPreferences': '打开系统偏好设置',
    'dialog.diagnosticsCopied': '诊断信息已拷贝到剪贴板。',
    'dialog.captchaUnavailable': '无法加载登录所需的人机验证（Google reCAPTCHA）',
    'dialog.captchaUnavailableDetail':
      'Slack 登录时要求完成 reCAPTCHA 验证，但无法连接 {host}（{error}）。请检查网络连接；如果你的网络无法访问 Google，请打开 VPN 或代理并设为“系统代理”，然后重新载入。',
    'dialog.captchaRetryDetail': '无法连接 {host}（{error}）。重新载入后，本程序会改用 Google 的备用地址加载人机验证。',

    'download.done': '下载完成',
    'download.failed': '下载失败',

    'picker.title': '选择要共享的内容',
    'picker.screens': '整个屏幕',
    'picker.windows': '窗口',
    'picker.share': '共享',
    'picker.cancel': '取消',
    'picker.empty': '没有找到可以共享的内容。',
    'picker.permissionHint':
      '尚未授予“屏幕录制”权限，预览可能是空白的。请在 系统偏好设置 › 安全性与隐私 › 隐私 › 屏幕录制 中允许“{name}”，然后重新打开本应用。',
    'picker.openSettings': '打开系统偏好设置',
  },
};

function pickLanguage(locales) {
  const first = (Array.isArray(locales) ? locales : [locales]).find(Boolean);
  return /^zh\b/i.test(String(first || '')) ? 'zh' : 'en';
}

function createTranslator(language) {
  const table = STRINGS[language] || STRINGS.en;
  return function t(key, vars = {}) {
    const template = table[key] ?? STRINGS.en[key] ?? key;
    return template.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match));
  };
}

module.exports = { STRINGS, pickLanguage, createTranslator };
