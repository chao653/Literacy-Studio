'use strict';

const fs = require('node:fs');
const path = require('node:path');

// "report.pdf" -> "report (1).pdf" -> "report (2).pdf" ... like Finder and browsers do.
function uniqueFilePath(directory, filename, exists = fs.existsSync) {
  const safeName = path.basename(String(filename || '')).replace(/^\.+/, '') || 'download';
  const ext = path.extname(safeName);
  const stem = ext ? safeName.slice(0, -ext.length) : safeName;

  let candidate = path.join(directory, safeName);
  for (let index = 1; exists(candidate); index += 1) {
    candidate = path.join(directory, `${stem} (${index})${ext}`);
  }
  return candidate;
}

function registerDownloads(ses, { getMainWindow, shouldAsk, t }) {
  const { app, Notification, shell } = require('electron');
  const active = new Set();
  let askOnce = 0;

  const updateProgress = () => {
    const win = getMainWindow();
    if (!win || win.isDestroyed()) return;
    let received = 0;
    let total = 0;
    for (const item of active) {
      received += item.getReceivedBytes();
      total += item.getTotalBytes();
    }
    win.setProgressBar(active.size === 0 ? -1 : total > 0 ? received / total : 0);
  };

  const notify = (title, body, onClick) => {
    if (!Notification.isSupported()) return;
    const notification = new Notification({ title, body, silent: true });
    if (onClick) notification.on('click', onClick);
    notification.show();
  };

  ses.on('will-download', (_event, item) => {
    const ask = askOnce > 0 || shouldAsk();
    if (askOnce > 0) askOnce -= 1;
    if (!ask) {
      item.setSavePath(uniqueFilePath(app.getPath('downloads'), item.getFilename()));
    }
    active.add(item);
    updateProgress();

    item.on('updated', updateProgress);
    item.once('done', (_doneEvent, state) => {
      active.delete(item);
      updateProgress();
      const savePath = item.getSavePath();
      const name = savePath ? path.basename(savePath) : item.getFilename();

      if (state === 'completed') {
        if (process.platform === 'darwin' && app.dock) app.dock.downloadFinished(savePath);
        notify(t('download.done'), name, () => shell.showItemInFolder(savePath));
      } else if (state === 'interrupted') {
        notify(t('download.failed'), name);
      }
    });
  });

  return {
    // The next download shows a save dialog regardless of the setting ("Save Image As…").
    askForNext() {
      askOnce += 1;
    },
  };
}

module.exports = { uniqueFilePath, registerDownloads };
