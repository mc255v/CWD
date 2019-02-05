var css = document.querySelector('h3'),
	color1 = document.querySelector('.color1'),
	color2 = document.querySelector('.color2'),
	body = document.getElementById('gradient');

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);