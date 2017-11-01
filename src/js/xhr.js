function xhrGet(url, responseType = '') {
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.onload = function() {
			(this.status == 200) ? resolve(this.response) : reject(this.statusText);
		}

		request.onerror = function() {
			reject(Error("xhr error"));
		}

		request.open('GET', url);
		request.responseType = responseType;
		request.send();
	});
}
