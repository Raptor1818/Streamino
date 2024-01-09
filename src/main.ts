import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import DatabaseConstructor, {Database} from "better-sqlite3";
import fs from 'fs';
import path from 'path';

try {
  require('electron-reloader')(module);
} catch (error) {
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
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
    },
  });

  mainWindow.loadFile("dist/index.html");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//---------------------------------------------------------------------

