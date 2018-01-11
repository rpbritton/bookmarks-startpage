function getWallpaper(src) {
	let wallpaperImg = new Image();
	wallpaperImg.onload = () => {
		document.getElementById('wallpaper-vig').appendChild(wallpaperImg);
		document.getElementById('wallpaper-vig').style.opacity = 1;
		document.getElementById('wallpaper-blank').style.opacity = 0;
	}
	wallpaperImg.id = 'wallpaper-img';
	wallpaperImg.src = src;
}
