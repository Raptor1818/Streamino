import { app, BrowserWindow } from 'electron';
import path from 'path';
import Database from 'better-sqlite3';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    center: true,
    backgroundColor: "#000000",
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      allowRunningInsecureContent: true
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
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

// ----------------------------------------------

const db = new Database(path.join(__dirname, 'movies.db'));

// Initialize the movies table
function initializeDatabase() {
  const createTable = `
    CREATE TABLE IF NOT EXISTS movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      year INTEGER,
      duration INTEGER,
      genre TEXT,
      overview TEXT
    );
  `;
  db.prepare(createTable).run();
}

// Call initializeDatabase to set up the table
initializeDatabase();

// CRUD Operations
// Insert a movie
function insertMovie(title: string, year: number, duration: number, genre: string, overview: string) {
  const insert = db.prepare('INSERT INTO movies (title, year, duration, genre, overview) VALUES (?, ?, ?, ?, ?)');
  insert.run(title, year, duration, genre, overview);
}

// Query movies
function getMovies() {
  return db.prepare('SELECT * FROM movies').all();
}

// Update a movie
function updateMovie(id: number, title: string, year: number, duration: number, genre: string, overview: string) {
  const update = db.prepare('UPDATE movies SET title = ?, director = ?, release_year = ? WHERE id = ?');
  update.run(title, year, duration, genre, overview);
}

// Delete a movie
function deleteMovie(id: number) {
  const del = db.prepare('DELETE FROM movies WHERE id = ?');
  del.run(id);
}
