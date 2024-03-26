
//select our container element
var containerElement = document.querySelector('.Container');

//select color swatches function definition
function insertColorSwatches(costume) {

	//select the kirby element 
	var kirbyElement = document.querySelector(`.Kirby[data-costume="${ costume.title }"]`);

// for each color in the costume...
	costume['colors'].forEach((color) => {

		//
		kirbyElement.innerHTML += `
			<div class="Swatch" style="background: ${ color }"></div>
		`;
	});
}

//insert single costume function
function insertCostume(costume) {


	containerElement.innerHTML += `
		<article class="Kirby" data-costume="${ costume['title'] }">
			<h2>${ costume['title'] }</h2>
			<img src="media/${ costume['image'] }"/>
			<p>${ costume['powers'] }</p>
		</article>
	`;

// insert color swatches fubction definition
	insertColorSwatches(costume);

}

// insert costumes function definition
function insertCostumes(costumes) {

// empty the container element
	containerElement.innerHTML = '';

// for each costume...
	costumes.forEach((costume) => {
//insert costume
		insertCostume(costume);
	});

}
// insert all costumes into the DOM
insertCostumes(costumes);



// FILTER COSTUMES BY COLOR
// ---------------------------------------------

// get all the costumes with a single color
var redCostumes = costumes.filter((costume) => {
	return costume['colors'].includes('red');
})

var redCostumes = costumes.filter((costume) => {
	return costume['colors'].includes('blue');
})

var redCostumes = costumes.filter((costume) => {
	return costume['colors'].includes('yellow');
})

console.log(redCostumes);


function getCostumesWithColor(Color) {

	var getCostumesWithColor = costumes.filter((costume) => {
	return costume ['colors'].includes(color);
	})
}//return the variable
return getCostumesWithColor;

var redCostumes = getCostumes = getCostumesWithColor('red');

//EVENT LISTENERS
//-----------------------------------

// get all the buttons elements

var colorButtonElements= document.querySelectorAll('ColorControls input');

//for each button...

colorButtonElements.forEach((button) => {
button.addEventListener('click', () => {
	var color = button.value;
	var costumesWithColor = getCostumesWithColor(color);

	//console.log(costumesWithColor);
	insertCostumes(costumesWithColor);
	consule.log(costumes)
});
	});



