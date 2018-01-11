const defaultSettings = {
	'wallpaper': {'title': 'Wallpaper', 'status': true,
		'url': 'https://source.unsplash.com/1366x768/?city,nature'},
	'darktheme': {'title': 'Dark theme', 'status': false},
	'quotes': {'title': 'Quotes', 'status': false},
	'clock': {'title': 'Clock', 'status': true}
};

chrome.storage.sync.get(storage => {
	if (Object.keys(storage).length === 0) {
		chrome.storage.sync.set({'settings': defaultSettings}, createSettings);
	}
	else {
		createSettings();
	}
});

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
			if (setting === 'wallpaper') {
				chrome.contextMenus.create({
					'title': 'Wallpaper url',
					'contexts': ['page_action'],
					'id': 'wallpaper_url'
				});
			}
		}
	});

	chrome.contextMenus.onClicked.addListener(setting => {
		if (setting.menuItemId === 'wallpaper_url') {
			chrome.storage.sync.get('settings', storage => {
				let newUrl = prompt(`Enter the wallpaper url:\n(Default is "${defaultSettings.wallpaper.url}")`, storage.settings.wallpaper.url);
				if (newUrl) {
					let test = new Image();
					test.onload = () => {
						storage.settings.wallpaper.url = newUrl;
						chrome.storage.sync.set({'settings': storage.settings});
					}
					test.onerror = () => {
						alert('Error: invalid image url');
						console.error('Error: invalid custom wallpaper url');
					}
					test.src = newUrl;
				}
			});
		}
		else {
			chrome.storage.sync.get('settings', storage => {
				storage.settings[setting.menuItemId].status = setting.checked;
				chrome.storage.sync.set({'settings': storage.settings});
			});
		}
	});
}

//setDefaults();
function setDefaults() {
	chrome.storage.sync.clear();
	chrome.storage.local.clear();
}
