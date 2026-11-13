'use strict';

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('picker', {
  init: () => ipcRenderer.invoke('picker:init'),
  choose: (sourceId) => ipcRenderer.send('picker:choose', typeof sourceId === 'string' ? sourceId : null),
  openSettings: () => ipcRenderer.send('picker:open-settings'),
});
