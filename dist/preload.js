"use strict";

// src/preload.ts
var import_electron = require("electron");
import_electron.contextBridge.exposeInMainWorld("myAPI", {
  updateTitle: async (arg) => import_electron.ipcRenderer.invoke("update-title", arg),
  openExternal: async (arg) => import_electron.ipcRenderer.invoke("open-external", arg)
});
//# sourceMappingURL=preload.js.map
