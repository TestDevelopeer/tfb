const {BrowserWindow} = require('electron');

let mainWindow;

mainWindow = new BrowserWindow({
	width: 1280,
	height: 720,
	webPreferences: {
		nodeIntegration: true,
		contextIsolation: false
	},
	titleBarStyle: 'hidden',
	titleBarOverlay: {
		color: '#f8f9fa',
		symbolColor: '#E0040B'
	}, icon: __dirname + '/icon.ico',
});

module.exports = mainWindow;