function getQuote() {
	xhrGet('https://talaikis.com/api/quotes/random/').then(response => {
		let info = JSON.parse(response);
		if (info.quote) {
			let quote = document.getElementById('quote');
			quote.innerHTML = `${info.quote}<br>- ${info.author}`;
			quote.style.opacity = 0.9;
			quote.style.borderColor = `#${materialColors[Math.round(Math.random()*15)][5]}`;
		}
	}).catch(error => {
		console.error('could not fetch quote');
	});
}
