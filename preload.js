console.log("Preload Module");

const { contextBridge, ipcRenderer } = require("electron/renderer");

// contextBridge.exposeInMainWorld("actions", {
//   setTitle: (title) => ipcRenderer.send("set-title", title),
//   openFile: () => ipcRenderer.invoke("dialog:openFile"),
//   onUpdateCounter: (recCallback) =>
//     ipcRenderer.on("update-counter", (_event, value) => recCallback(value)),
//   setNum: (info) => {
//     ipcRenderer.invoke("set-num", info);
//   },
// });

contextBridge.exposeInMainWorld("ipc2way", {
  updateMessage: () => {
    ipcRenderer.send("update-detect");
  },
  downloadandInstall: () => {
    ipcRenderer.invoke("download-install");
  },
  send: (chanel, data) => ipcRenderer.send(chanel, data),
  on: (chanel, func) =>
    ipcRenderer.on(chanel, (event, ...args) => func(...args)),
});

//App Lists Manager
contextBridge.exposeInMainWorld("ipcway", {
  appRouter: (data) => ipcRenderer.send('app-clicked',data),
  closeSubApp: () => ipcRenderer.invoke('close-sub-app'),
 
});
