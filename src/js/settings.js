chrome.storage.sync.get('settings', storage => {
	if (storage.settings.wallpaper.status)
		getWallpaper(storage.settings.wallpaper.url);
	if (storage.settings.darktheme.status)
		setThemeDark(true);
	else
		setThemeDark(false);
	if (storage.settings.quotes.status)
		getQuote();
	if (storage.settings.clock.status)
		startClock();
});
