const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("jobAlerts", {
  showNotification: (jobTitle) =>
    ipcRenderer.send("show-job-notification", jobTitle),
});