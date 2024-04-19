var lat = 51.58816;
var lng = -0.34229;
var URL = `https://api.sunrisesunset.io/json?lat=${ lat }&lng=${ lng }`;

fetch(URL)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
		render(data);
	})

function render(data) {
	var sunriseDateObject = new Date(`${ data.results.date } ${ data.results.sunrise }`);
	var nowDateObject = new Date();
	var sunsetDateObject = new Date(`${ data.results.date } ${ data.results.sunset }`);
	var startSeconds = sunriseDateObject.getTime();
	var nowSeconds = nowDateObject.getTime();
	var endSeconds = sunsetDateObject.getTime();
	console.log(startSeconds, nowSeconds, endSeconds);
	var angle = map(nowSeconds, startSeconds, endSeconds, 0,10);
	var shadowElement = document.querySelector('.shadow');
	shadowElement.style.transform = `translateX(60px) rotate(${ angle }deg)`;
  shadowElement.style.transform = `translateY(5px) rotate(${ angle }deg)`;

}

function map(num, in_min, in_max, out_min, out_max) {
	return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
