const {
  app,
  BrowserWindow,
  Notification,
  ipcMain,
} = require("electron");

const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (app.isPackaged) {
  mainWindow.loadFile(
    path.join(__dirname, "../frontend/dist/index.html")
  );
} else {
  mainWindow.loadURL("http://localhost:5173");
}
}

ipcMain.on("show-job-notification", (_event, jobTitle) => {
  console.log("Notification request received:", jobTitle);

  console.log("Notifications supported:", Notification.isSupported());

  if (Notification.isSupported()) {
    new Notification({
      title: "PGRKAM Smart Job Finder",
      body: `New opportunity: ${jobTitle}`,
    }).show();
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});