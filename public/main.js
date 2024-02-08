// const { app, BrowserWindow, Menu, dialog } = require("electron/main");
// const path = require("node:path");

// let isMac = process.platform == "darwin";
// let template = [
//   {
//     label: "File",
//     submenu: [
//       { label: "Open Inspection", click: openInspection },
//       { label: "Save Inspection" },
//       { label: "Open Template" },
//       { label: "Save Template" },
//       isMac ? { role: "close" } : { role: "quit" },
//     ],
//   },
//   {
//     label: "Edit",
//     submenu: [
//       { label: "Client Information", click: clientInformationClick },
//       { label: "Address Book", click: address },
//       { label: "Contract Page" },
//       { label: "Create/Edit Documents" },
//       { label: "Insert PDF Documents" },
//       { label: "Application Settings" },
//     ],
//   },
//   {
//     label: "Internet",
//     submenu: [{ label: "Office Login" }, { label: "Upload Report" }],
//   },
//   {
//     label: "Report Settings",
//     submenu: [
//       { label: "Company Logo" },
//       { label: "Inspector Signature" },
//       { label: "Client Signature" },
//     ],
//   },
//   {
//     label: "Photos",
//     submenu: [
//       { label: "Add Review Photos" },
//       { label: "Batch Add Photos" },
//       { label: "Clear All Photos" },
//     ],
//   },
//   {
//     label: "About",
//     submenu: [
//       { label: "Contact Support" },
//       { label: "Remote Help Connection" },
//       { label: "About" },
//     ],
//   },
// ];

// let win;

// function createWindow() {
//   win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       contextIsolation: true,
//       preload: path.join(__dirname, "preload.js"),
//       nodeIntegration: true,
//       enableRemoteModule: true,
//     },
//   });

//   win.loadURL("https://macjdemo.onrender.com");
//   let menu = Menu.buildFromTemplate(template);
//   Menu.setApplicationMenu(menu);
// }

// function openInspection() {
//   // Show a file dialog to upload .hzf files
//   dialog.showOpenDialog(win, {
//     properties: ['openFile'],
//     filters: [{ name: 'HZF Files', extensions: ['hzf'] }],
//   })
//     .then((result) => {
//       if (!result.canceled && result.filePaths.length > 0) {
//         const filePath = result.filePaths[0];
//         // Add your logic to handle the selected .hzf file
//         console.log("Selected .hzf file:", filePath);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

// function clientInformationClick() {
//   win.loadURL("https://macjdemo.onrender.com/client-info");
// }

// function address() {
//   win.loadURL("https://macjdemo.onrender.com/book");
// }

// app.whenReady().then(() => {
//   createWindow();

//   app.on("activate", () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow();
//     }
//   });
// });

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });



const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'public', 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadURL('https://macjdemo.onrender.com/');

  // Handle messages from the renderer process
  ipcMain.on('message-to-main', (event, message) => {
    console.log('Message received in the main process:', message);
    // Handle the message or perform any necessary actions
    // Example: Send a response back to the renderer process
    event.reply('response-channel', 'Hello from the main process!');
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});