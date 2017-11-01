// light theme
document.body.style.setProperty('--fg-color', `#${materialColors[17][9]}`);
document.body.style.setProperty('--fg-faded-color', `#${materialColors[17][2]}`);
document.body.style.setProperty('--bg-color', `#${materialColors[17][0]}`);

function setPalette(img, num = 1, qual = 1) {
	let colorThief = new ColorThief();
	colorThief.getPalette(img, num, qual);
}
