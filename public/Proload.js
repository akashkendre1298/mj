const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    // Expose specific functions or APIs to the renderer process
    sendToMain: (channel, data) => {
        ipcRenderer.send(channel, data);
    },
    receiveFromMain: (channel, func) => {
        const listener = (_, data) => func(data);
        ipcRenderer.on(channel, listener);

        // Clean up the listener when the window is unloaded
        window.addEventListener('unload', () => {
            ipcRenderer.removeListener(channel, listener);
        });
    },
});