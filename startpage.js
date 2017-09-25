var opaque = false;
var bookmarks = document.getElementById('bookmarks');

chrome.bookmarks.search('startpage', function(folders) {
	folders.forEach(function(folder) {
		chrome.bookmarks.getSubTree(folder.id, function(categories) {
			var bookmarksHTML = "";
			categories[0].children.forEach(function(category) {
				bookmarksHTML += (
					"<li class=\"category\">" +
						"<h2 class=\"category-title\">" +category.title +"</h2>" +
						"<ul class=\"subject-list\">"
				);
				category.children.forEach(function(subject) {
					bookmarksHTML += (
						"<li class=\"subject\">" +
							"<a class=\"subject-link\" href=\"" +subject.url +"\">" +
								"<span class=\"subject-command\">" +
									subject.title.substring(0, subject.title.indexOf(':')) +
								"</span>" +
								"<span class=\"subject-title\">" +
									subject.title.substring(subject.title.indexOf(':')+1) +
								"</span>" +
							"</a>" +
						"</li>"
					);
				});
				bookmarksHTML += (
						"</ul>" +
					"</li>"
				);
			});
			bookmarks.innerHTML = bookmarksHTML;
		});
	});
});

var form = document.getElementById('form').addEventListener('submit', function(e) {
	e.preventDefault();
	var formInput = document.getElementById('formInput').value;
	if (!formInput) {
		/*if (opaque) {
			overlay.style.opacity = "";
			opaque = false;
		}
		else {
			overlay.style.opacity = "1";
			opaque = true;
		}*/
	}
	else {
		if (formInput.match(new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g))) {
			if (formInput.substring(0, 4) !== 'http') {
				window.location.href = "https://" +formInput;
			}
		}
		else {
			window.location.href = "https://www.google.com/search?q=" +encodeURIComponent(formInput);
		}

		chrome.bookmarks.search('startpage', function(folders) {
			folders.forEach(function(folder) {
				chrome.bookmarks.getSubTree(folder.id, function(categories) {
					categories[0].children.forEach(function(category) {
							category.children.forEach(function(subject) {
							if (formInput === subject.title.substring(0, subject.title.indexOf(':'))) {
								window.location.href = subject.url;
							}
						});
					});
				});
			});
		});
	}
});
