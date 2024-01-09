"use strict";

// src/main.ts
var import_electron = require("electron");
try {
  require("electron-reloader")(module);
} catch (error) {
}
var createWindow = () => {
  const mainWindow = new import_electron.BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    center: true,
    backgroundColor: "#121212",
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      allowRunningInsecureContent: true
    }
  });
  mainWindow.loadFile("dist/index.html");
  mainWindow.webContents.openDevTools();
};
import_electron.app.on("ready", createWindow);
import_electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    import_electron.app.quit();
  }
});
import_electron.app.on("activate", () => {
  if (import_electron.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
//# sourceMappingURL=main.js.map
