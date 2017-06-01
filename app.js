/* jshint esversion: 6 */
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
    // Create window object
    win = new BrowserWindow({width: 800, height: 600, icon:__dirname+'/img/icon.png'});

    // Load index
    win.loadURL(url.format({
        pathname: path.join(__dirname+'/views/', 'index.html'),
        protocol: 'file',
        slashes: true

    }));

    // Include DevTools
    win.webContents.openDevTools();

    // Close event with anon func
    win.on('closed', () => {

        win = null;

    });

}

app.on('ready', createWindow);

// Quit when windows are closed. 
app.on('window-all-closed', () => {

    if(process.platform != 'darwin') {

        app.quit();

    }

});