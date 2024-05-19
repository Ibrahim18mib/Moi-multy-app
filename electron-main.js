const { app, BrowserWindow, ipcMain, dialog } = require("electron/main");
const path = require("node:path");
const isDev = process.argv.includes("--dev");

const { BaseWindow, WebContentsView, screen } = require("electron");

//csp disabled
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

let mainWindow;

function createWindow() {
  const display = screen.getPrimaryDisplay();
  const { width, height } = display.workAreaSize;

  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    fullscreen: true, // Set the window to be fullscreen
    fullscreenable: false, // Disable fullscreen toggling
    resizable: false, // Disable resizing
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:4200");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL("http://localhost:4200/home");
  }
}
// new window create END

/// APP Listeners, Handlers
app.on("ready", () => {
  console.log("App is in Ready mode");
  createWindow();
});

app.whenReady().then(() => {
  console.log("App is in When REady mode");
});

//APP Listeners
ipcMain.on("app-clicked", (event, value) => {
  console.log("applistener", value);

  view1 = new WebContentsView();
  mainWindow.contentView.addChildView(view1);
  // win.contentView.addChildView(view1);
  view1.webContents.loadURL(value.appUrl);
  view1.setBounds({
    x: value.appX,
    y: value.appY,
    width: value.appWidth,
    height: value.appHeight,
  });

  
});




ipcMain.handle('close-sub-app', () => {
  view1.setBounds({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  view1 = null;
})
