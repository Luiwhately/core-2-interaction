// STRINGS
// -----------------------------

console.log('\nSTRINGS\n\n\n');

console.log('A string with single quotes'); // single quote
console.log("A string with double quotes"); // doble quotes
console.log(`A string with back ticks`); // back tick
console.log('A ' + 'string' + 'in ' + 'pieces'); // corcatenation

// NUMBERS
// ----------------------------

console.log('\n\nNUMBERS\n\n\n');

console.log(3); // number
console.log(3 + 3); // add
console.log(3 - 3); // subtract
console.log(3 * 3); // multiplication
console.log(3 / 3); // divide
console.log(10 % 3); // modulo

// STRINGS AND NUMBERS //

console.log('\n\nSTRINGS & NUMBERS\n\n\n');
console.log('100 * 50'); // NUMBERS IN A STRING
console.log('100 * 50 equals ' + 100 * 50); // adding number to a string
console.log(100 * 50 + '25');
console.log(`The year was ${ 2024 - 333} ,333 years ago`);  // template strings

// BOOLEAN

console.log('\n\nBOOLEANS\n\n\n');

console.log(true, false); // true and false
console.log(3 < 4); // less than
console.log('3 < 4 : ', 3 < 4);
console.log('4 > 10 : ',4 > 10); // greater than
console.log('2 >= 2 : ', 2>= 2); // greater than or equal to 
console.log('2 >= 2 : ', 2<= 2); // greater than or equal to
console.log('8 + 2 == 5 + 5 : ' , 8 + 2 == 5 + 5); // equal to
console.log("'tomato' != 'vegetable'", 'tomato' != 'tomato'); // unequal

// VARIABLES
// -----------------

console.log('\n\nVariables\n\n\n');

var studentLoanDebt = 800;
console.log('studentLoanDebt : ', studentLoanDebt);

studentLoanDebt = studentLoanDebt - 100;
console.log('studentLoanDebt : ', studentLoanDebt)

studentLoanDebt = studentLoanDebt + 50;
console.log('studentLoanDebt : ', studentLoanDebt)

// ARRAYS
// -----------------

var myFavoriteColors = ['yellowgreen', 'fuchsia', 'gainsboro'];
console.log('myFavoriteColor : ', myFavoriteColors);
console.log('myFavoriteColors[1] : ',myFavoriteColors[1]);

// OBJECTS
//------------------------

console.log('\n\nOBJECTS\n\n\n');

var me = {
    firstName: 'Luiza',
    lastName:  'Whately',
    Age: '19',
    likeMayo: false,
};
console.log('me : ' , me);
console.log("me['firstName'] : ", me['firstName']); // bracket notation

// ARRAY OF OBJECTS
// -----------------

console.log('\n\nARRAY OF OBJECTS\n\n\n');

var us = [

    {
        firstName: 'Bryant',
        lastName:'Wells',
    },

    {
        firstName: 'Luiza',
        lastName: 'Whately',
    },

    { 
        firstName: 'Meera',
        lastName: 'Sunil',
    },


];

console.log(us);
console.log(us[0]);
console.log(us[0]['lastName']);