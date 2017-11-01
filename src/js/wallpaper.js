/*
function getWallpaper() {
	xhrGet('http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-WW').then(response => {
		let wallpaperImg = new Image();
		wallpaperImg.onload = () => {
			document.getElementById('wallpaper-vig').appendChild(wallpaperImg);
			document.getElementById('wallpaper-blank').style.opacity = '0';
		}
		wallpaperImg.id = 'wallpaper-img';
		wallpaperImg.src = `http://www.bing.com${JSON.parse(response).images[0].url}`;
	}).catch(error => {
		console.error("could not fetch wallpaper, retrying in 30 seconds");
		setTimeout(() => {
			getWallpaper();
		}, 30*1000);
	});
}
getWallpaper();
*/
function setWallpaper(src) {
	let wallpaperImg = new Image();
	wallpaperImg.onload = () => {
		document.getElementById('wallpaper-vig').appendChild(wallpaperImg);
		document.getElementById('wallpaper-blank').style.opacity = '0';
//		setPalette(wallpaperImg);
	}
	wallpaperImg.id = 'wallpaper-img';
	wallpaperImg.src = src;
}
setWallpaper('https://source.unsplash.com/random');

