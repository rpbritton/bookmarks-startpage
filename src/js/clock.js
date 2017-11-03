function startClock() {
	let clock = document.getElementById('clock');
	clock.style.borderColor = `#${materialColors[Math.round(Math.random()*15)][5]}`;
	clock.style.opacity = 0.9;
	setClock(new Date());
	setInterval(() => {
		setClock(new Date());
	}, 1000);
}
function setClock(time) {
	let hour = `0${time.getHours()}`.slice(-2);
	let minutes = `0${time.getMinutes()}`.slice(-2);
	let seconds = `0${time.getSeconds()}`.slice(-2);
	document.getElementById('clock').innerHTML = `${hour} : ${minutes} : ${seconds}`;
}
