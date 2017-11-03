chrome.runtime.onInstalled.addListener(checkForSettings);
chrome.runtime.onStartup.addListener(checkForSettings);
function checkForSettings() {
	chrome.storage.sync.get('settings', storage => {
		if (storage.settings) {
			createSettings();
		}
		else {
			let settings = {
				'wallpaper': {'title': 'Wallpaper', 'status': true,
					'url': 'https://source.unsplash.com/random/1920x1080/'},
				'darktheme': {'title': 'Dark theme', 'status': false},
				'quotes': {'title': 'Quotes', 'status': false},
				'clock': {'title': 'Clock', 'status': true}
			};
			chrome.storage.sync.set({'settings': settings}, createSettings);
		}
	});
}

function createSettings() {
	chrome.storage.sync.get('settings', storage => {
		for (let setting in storage.settings) {
			chrome.contextMenus.create({
				'type': 'checkbox',
				'title': storage.settings[setting].title,
				'contexts': ['page_action'],
				'id': setting,
				'checked': storage.settings[setting].status
			});
		}
	});

	chrome.contextMenus.onClicked.addListener(setting => {
		chrome.storage.sync.get('settings', storage => {
			storage.settings[setting.menuItemId].status = setting.checked;
			chrome.storage.sync.set({'settings': storage.settings});
		});
	});
}

//setDefaults();
function setDefaults() {
	chrome.storage.sync.clear();
	chrome.storage.local.clear();
}
