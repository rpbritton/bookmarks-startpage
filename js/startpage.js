chrome.bookmarks.search('startpage', rootFolders => {
	let wrapperCategories = document.getElementById('wrapper-categories');
	for (let rootFolder of rootFolders) {
		if (rootFolder.title == 'startpage') {
			chrome.bookmarks.getSubTree(rootFolder.id, categories => {
				for (let category of categories[0].children) {
					let categoryEl = document.createElement('div');
					categoryEl.className = 'category';

					let categoryTitleEl = document.createElement('span');
					categoryTitleEl.className = 'category-title';
					categoryTitleEl.innerHTML = category.title;
					categoryTitleEl.style.backgroundColor = `#${colors[Math.round(Math.random()*15)][5]}`;
					categoryEl.appendChild(categoryTitleEl);

					for (let bookmark of category.children) {
						let categoryLinkEl = document.createElement('a');
						categoryLinkEl.className = 'category-link';
						categoryLinkEl.href = bookmark.url;
						categoryLinkEl.innerHTML = bookmark.title;
						categoryLinkEl.addEventListener('mousedown', function(ev) {
							inkAnimation(ev, this, this, `#${colors[17][5]}`);
						});
						categoryEl.appendChild(categoryLinkEl);
					}
					wrapperCategories.appendChild(categoryEl);
				}
			});
		}
	}
});

document.body.style.setProperty('--fg-color', `#${colors[17][9]}`);
document.body.style.setProperty('--fg-faded-color', `#${colors[17][2]}`);
document.body.style.setProperty('--bg-color', `#${colors[17][0]}`);

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
