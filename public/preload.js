const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  // other functions...
});

contextBridge.exposeInMainWorld("ipcRenderer", ipcRenderer);
