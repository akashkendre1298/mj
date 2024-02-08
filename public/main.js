const { app, BrowserWindow, Menu, dialog } = require("electron/main");
const path = require("node:path");

let isMac = process.platform == "darwin";
let template = [
  {
    label: "File",
    submenu: [
      { label: "Open Inspection", click: openInspection },
      { label: "Save Inspection" },
      { label: "Open Template" },
      { label: "Save Template" },
      isMac ? { role: "close" } : { role: "quit" },
    ],
  },
  {
    label: "Edit",
    submenu: [
      { label: "Client Information", click: clientInformationClick },
      { label: "Address Book", click: address },
      { label: "Contract Page" },
      { label: "Create/Edit Documents" },
      { label: "Insert PDF Documents" },
      { label: "Application Settings" },
    ],
  },
  {
    label: "Internet",
    submenu: [{ label: "Office Login" }, { label: "Upload Report" }],
  },
  {
    label: "Report Settings",
    submenu: [
      { label: "Company Logo" },
      { label: "Inspector Signature" },
      { label: "Client Signature" },
    ],
  },
  {
    label: "Photos",
    submenu: [
      { label: "Add Review Photos" },
      { label: "Batch Add Photos" },
      { label: "Clear All Photos" },
    ],
  },
  {
    label: "About",
    submenu: [
      { label: "Contact Support" },
      { label: "Remote Help Connection" },
      { label: "About" },
    ],
  },
];

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  win.loadURL("http://localhost:3000/book");
  let menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

function openInspection() {
  // Show a file dialog to upload .hzf files
  dialog.showOpenDialog(win, {
    properties: ['openFile'],
    filters: [{ name: 'HZF Files', extensions: ['hzf'] }],
  })
    .then((result) => {
      if (!result.canceled && result.filePaths.length > 0) {
        const filePath = result.filePaths[0];
        // Add your logic to handle the selected .hzf file
        console.log("Selected .hzf file:", filePath);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

function clientInformationClick() {
  win.loadURL("http://localhost:3000/client-info");
}

function address() {
  win.loadURL("http://localhost:3000/book");
}

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

// const { app, BrowserWindow, Menu } = require("electron/main");
// const path = require("node:path");

// let isMac = process.platform == "darwin";

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
//     autoHideMenuBar: true, // Hide the default menu bar
//   });

//   win.loadURL("D:\mjcoppy\virtuebyte projects\Macj webapp\macj\build\index.html");
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
