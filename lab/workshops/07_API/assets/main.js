// VARIABLES
// ----------------------

var key = '8d48cf5463b6d3adc13677415820c82e';
var zip = 10011;

// API URL
// -----------------------

var URL = `https://api.openweathermap.org/data/2.5/weather?zip=${ zip }&units=imperial&appid=${ key }`;

// FETCH REQUEST
// -------------------------

fetch (URL)
    .then((response) => {
        return response.json();
    })
    .then ((data) => {
        render(data);
    })

    // RENDER FUNCTION
    // ---------------------

function render(data) {
    var containerElement = document.querySelector('.Container');
    var WeatherVaneElement = document.querySelector('.WeatherVane');
    var infoElement = document.querySelector('.Info');
    
// edit info element
infoElement.innerHTML = `
    <p>zip: ${ zip }</p>
    <p>Temp: ${ data.main.temp} F </p>
    <p> Wind Direction: ${ data.wind.deg } deg</p>
    <p> Wind Speed: ${data.wind.speed } mph </p>
`;
// edit the container
containerElement.style.background = `hsl(${ data.main.temp },100%, 50%)`;
WeatherVaneElement.style.transform = `rotate(${ data.wind.deg}deg)`;
WeatherVaneElement.style.animationDuration = `${data.wind.speed / 20 }s`;
// edit the routation
console.log(data);


}