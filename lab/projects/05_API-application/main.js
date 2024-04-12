// VARIABLES
// ----------------------
 var key = '51.58816&lng=-0.34229';
 var latitude = 51.58816;
 var longitude = -0.34229;

 // API URL
// -----------------------
var URL = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;

// FETCH REQUEST
// -------------------------
fetch(URL)
  .then(response => {
    return response.json();
  })
  .then(data => {
    render (data);
 })

  // RENDER FUNCTION
    // ---------------------
    function render (data){
        var ContainerElement = document.querySelector ('.Container')
        var CountDownClockElement = document.querySelector('CountDownClock');
        var SunsetTextElement = document.querySelector( 'SunsetText');
        var FixedTextElement = document.querySelector( 'FixedText');
        var infoElement = document.querySelector('.Info');


    // edit info element
    infoElement.innerHTML = `
        <p>Sunset: ${ data.results.sunset } </p>
        <p>Date: ${ data.results.date} </p>
        `;

        // edit the container
        SunsetTextElement.style.transform = `rotate(${ data.results.sunset }deg)`;
    console.log(data);
    }
