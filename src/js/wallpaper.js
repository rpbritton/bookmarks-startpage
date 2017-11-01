/*
function getNewImage() {
	xhrGet('http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-WW').then(response => {
		let backgroundImg = new Image();
		backgroundImg.onload = () => {
			document.getElementById('background-img-vig').appendChild(backgroundImg);
			document.getElementById('background-blank').style.opacity = '0';
		}
		backgroundImg.id = 'background-img';
		backgroundImg.src = `http://www.bing.com${JSON.parse(response).images[0].url}`;
	}).catch(error => {
		console.error("could not fetch wallpaper, retrying in 30 seconds");
		setTimeout(() => {
			newWallpaper();
		}, 30*1000);
	});
}
getNewImage();
*//*
function setWallpaper(src) {
	let wallpaperImg = new Image();
	wallpaperImg.onload = () => {
		document.getElementById('wallpaper-vig').appendChild(wallpaperImg);
		document.getElementById('wallpaper-blank').style.opacity = '0';
		setPalette(wallpaperImg);
	}
	wallpaperImg.id = 'wallpaper-img';
	wallpaperImg.src = src;
}
setWallpaper('img/background.jpg');
*/
