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
					categoryTitleEl.style.backgroundColor = `#${materialColors[Math.round(Math.random()*15)][5]}`;
					categoryEl.appendChild(categoryTitleEl);

					for (let bookmark of category.children) {
						let categoryLinkEl = document.createElement('a');
						categoryLinkEl.className = 'category-link';
						categoryLinkEl.href = bookmark.url;
						categoryLinkEl.innerHTML = bookmark.title;
						categoryLinkEl.addEventListener('mousedown', function(ev) {
							inkAnimation(ev, this, this, `#${materialColors[17][5]}`);
						});
						categoryEl.appendChild(categoryLinkEl);
					}
					wrapperCategories.appendChild(categoryEl);
				}
			});
		}
	}
});
