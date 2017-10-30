function inkAnimation(ev, el, selector, color) {
	var inkWrapper = document.createElement('div');
	inkWrapper.className = 'ink-wrapper';

	var longDim = Math.sqrt(Math.pow(el.offsetWidth *2, 2) +Math.pow(el.offsetHeight *2, 2));

	var ink = document.createElement('div');
	ink.setAttribute('class', 'ink');
	ink.style.width = longDim +"px";
	ink.style.height = longDim +"px";
	ink.style.left = (ev.clientX -el.getBoundingClientRect().left -longDim /2) +"px";
	ink.style.top = (ev.clientY -el.getBoundingClientRect().top -longDim /2) +"px";

	ink.style.backgroundColor = color;

	setTimeout(function() {
		ink.style.transform = "scale(1)";
	}, 0);

	selector.addEventListener("mouseup", function() { inkAnimationEnd(inkWrapper); });
	selector.addEventListener("mouseleave", function() { inkAnimationEnd(inkWrapper); });

	inkWrapper.appendChild(ink);
	el.appendChild(inkWrapper);
}

function inkAnimationEnd(inkWrapper) {
	setTimeout(function() {
		inkWrapper.style.opacity = "0";
	}, 0);

	setTimeout(function() {
		inkWrapper.remove();
	}, 400);
}
