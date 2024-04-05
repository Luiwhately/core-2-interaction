// Get Elements
// ---------------------
var hoursElement = document.querySelector('.Hours');
var minutesElement = document.querySelector('.Minutes');
var secondsElement = document.querySelector('.Seconds');
console.log(hoursElement, minutesElement, secondsElement);



///Every Seond...
// -------------------------------- (() => {}); - how to create a base ( empety function)
setInterval(() => {
    // Get time
    // ---------------------------------------


    var dateObject = new Date();
    var hours = dateObject.getHours();
    var minutes = dateObject.getMinutes();
    var seconds = dateObject.getSeconds();
    console.log(hours, minutes, seconds);

    // Update elements
    // ------------------------------------

    hoursElement.innerHTML = hours;
    minutesElement.innerHTML= seconds;
    secondsElement.innerHTML = seconds;
}, 1000);

