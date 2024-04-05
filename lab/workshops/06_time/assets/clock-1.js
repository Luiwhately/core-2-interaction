// Month and Day Lists
// -----------------------------------------------------------
var monthList = ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
var dayList = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

// the Date Object
// -------------------------------------------
var dateObject = new Date ();
console.log('dateObject:', dateObject);

// Hours
// --------------------------------

var hours = dateObject.getHours();
console.log('hours:', hours);

//----------------------------------

var minutes = dateObject.getMinutes();
console.log('minutes:', minutes);

// Seconds
// ----------------------------------
var seconds = dateObject.getSeconds();
console.log('seconds:', seconds);

// Period
// ------------------------------------
var period = (hours <= 12) ? 'am' : 'pm'; // ternaty operator
console.log('period:', period);
// if it is true it will value as the value that goes after question mark, if it is false it will value for what is goes after the : 

// year
// ---------------
var year = dateObject.getFullYear();
console.log('year:', year);


// Month
// ---------------
var month = monthList [dateObject.getMonth()];
console.log('month:', month);

// day
// ---------------
var day = dayList[dateObject.getDay()];
console.log('day:', day);


