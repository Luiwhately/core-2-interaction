var lat = 51.58816;
var lng = -0.34229;
var URL = `https://api.sunrisesunset.io/json?lat=${ lat }&lng=${ lng }`;

fetch(URL)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		render(data);
	})

function render(data) {
	setInterval(() => {

		// CALCULATE TIMES
		// ---------------------------

		var sunriseDateObject = new Date(`${ data.results.date } ${ data.results.sunrise }`);
		var nowDateObject = new Date();
		var sunsetDateObject = new Date(`${ data.results.date } ${ data.results.sunset }`);
		var startSeconds = sunriseDateObject.getTime();
		var nowSeconds = nowDateObject.getTime();
		var endSeconds = sunsetDateObject.getTime();

		// RENDER SHADOW
		// ---------------------------
		
		var angle = map(nowSeconds, startSeconds, endSeconds, 0,Math.PI);
		var shadowElement = document.querySelector('body');
		var svgFilterElement = document.querySelector('feDropShadow');
		var x = Math.sin(angle) * 22;
		var y = Math.cos(angle) * 34;
		shadowElement.style.textShadow = `${ x }px ${ y }px 8px black`;
		svgFilterElement.setAttribute('dx', x);
		svgFilterElement.setAttribute('dx', y);
		console.log(x,y);

		// RENDER COUNTDOWN
		// ---------------------------
		var countdownHours = Math.floor((endSeconds - nowSeconds) / 60 / 60 / 1000);
		var countdownMinutes = Math.floor((endSeconds - nowSeconds) / 60 / 1000) - (countdownHours * 60);
		var countdownSeconds = Math.floor((endSeconds - nowSeconds) / 1000) - (countdownHours * 60 * 60) - (countdownMinutes * 60);
		document.querySelector('.CountDownClock').innerHTML = `${ countdownHours} ${countdownMinutes} ${ countdownSeconds} ` ;

	}, 1000);
}

function map(num, in_min, in_max, out_min, out_max) {
	return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function radians(degrees) {
	return degrees * Math. PI / 180.0;
}

console.log(radians(80));

