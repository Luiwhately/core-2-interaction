//select our container element
var containerElement = document.querySelector('.collection');

// should I do that for all the filters (miles, review, starting location and looped

//insert single track function
function insertTrack(track) {


	containerElement.innerHTML += `
		<div class="tracks">
		<a href="${ track["link"] }">
			<img class="imageTrack" src="Media/FinalSVGDrawings/${ track["image"] }">
		</a>
			<div class="trackPageLink">
                <p>
                    <a class="tracksButton" href="${ track["link"] }"> ${ track["title"] } </a>
                </p>
            </div>
		</div>
	`;


}
// insert tracks function definition
function insertTracks(tracks) {

	// empty the container element
	containerElement.innerHTML = '';

	// for each track...
	tracks.forEach((track) => {
		//insert Track
		insertTrack(track);
	});

}
// insert all tracks into the DOM
insertTracks(tracks);


// miles filter

var shortTracks = tracks.filter((track) => {
	return track['miles'] > 1 && track['miles'] < 3;
});
var mediumTracks = tracks.filter((track) => {
	return track['miles'] > 4 && track['miles'] < 6;
});
var longTracks = tracks.filter((track) => {
	return track['miles'] > 6;
});

// review filter

var oneStarTracks = tracks.filter((track) => {
	return track['review'] == 1;
});

var twoStarTracks = tracks.filter((track) => {
	return track['review'] == 2;
});

var threeStarTracks = tracks.filter((track) => {
	return track['review'] == 3;
});

var fourStarTracks = tracks.filter((track) => {
	return track['review'] == 4;
});

var fiverStarTracks = tracks.filter((track) => {
	return track['review'] == 5;
});

// filter looped or not looped

var loopedTracks = tracks.filter((track) => {
	return track['Looped'] == 'Looped';
})

var notloopedTracks = tracks.filter((track) => {
	return track['Looped'] == 'Not Looped';
})

//filter starting location

var UpperEastTracks = tracks.filter((track) => {
	return track['startingLocation'] == 'Upper East';
})

var UpperWestTracks = tracks.filter((track) => {
	return track['startingLocation'] == 'Upper West';
})

var GramercyTracks = tracks.filter((track) => {
	return track['startingLocation'] == 'Gramercy Park';
})

var BrooklynTracks = tracks.filter((track) => {
	return track['startingLocation'] == 'Brooklyn';
})

var LowerEastTracks = tracks.filter((track) => {
	return track['startingLocation'] == 'Lower East';
})

var ChelseaTracks = tracks.filter((track) => {
	return track['startingLocation'] == 'Chelsea';
})

var RooseveltIslandTracks = tracks.filter((track) => {
	return track['startingLocation'] == 'Roosevelt Island';
})


//filter miles run 
var shortTracksButton = document.querySelector('.milesControl input[value="1-3"]');
shortTracksButton.addEventListener("click", () => {
	insertTracks(shortTracks);
	
})

var mediumTracksButton = document.querySelector('.milesControl input[value="4-6"]');
mediumTracksButton.addEventListener("click", () => {
	insertTracks(mediumTracks);
	
})

var longTracksButton = document.querySelector('.milesControl input[value="6+"]');
longTracksButton.addEventListener("click", () => {
	insertTracks(longTracks);
	
})

// filter rating tracks

var oneStarTracksButton = document.querySelector('.reviewControl input[value="1/5"]');
oneStarTracksButton.addEventListener("click", () => {
	insertTracks(oneStarTracks);
	
})

var twoStarTracksButton = document.querySelector('.reviewControl input[value="2/5"]');
twoStarTracksButton.addEventListener("click", () => {
	insertTracks(twoStarTracks);
	
})

var threeStarTracksButton = document.querySelector('.reviewControl input[value="3/5"]');
threeStarTracksButton.addEventListener("click", () => {
	insertTracks(threeStarTracks);
	
})

var fourStarTracksButton = document.querySelector('.reviewControl input[value="4/5"]');
fourStarTracksButton.addEventListener("click", () => {
	insertTracks(fourStarTracks);
	console.log(fourStarTracks);
})

var fiverStarTracksButton = document.querySelector('.reviewControl input[value="5/5"]');
fiverStarTracksButton.addEventListener("click", () => {
	insertTracks(fiverStarTracks);
	console.log(fiverStarTracks);
})

// filter starting location

var UpperEastTracksButton = document.querySelector('.startingLocationControl input[value="Upper East"]');
UpperEastTracksButton.addEventListener("click", () => {
	insertTracks(UpperEastTracks);
	console.log(UpperEastTracks);
})

var UpperWestTracksButton = document.querySelector('.startingLocationControl input[value="Upper West"]');
UpperWestTracksButton.addEventListener("click", () => {
	insertTracks(UpperWestTracks);
	console.log(UpperWestTracks);
})

var ChelseaTracksButton = document.querySelector('.startingLocationControl input[value="Chelsea"]');
ChelseaTracksButton.addEventListener("click", () => {
	insertTracks(ChelseaTracks);
	console.log(ChelseaTracks);
})

var BrooklynTracksButton = document.querySelector('.startingLocationControl input[value="Brooklyn"]');
BrooklynTracksButton.addEventListener("click", () => {
	insertTracks(BrooklynTracks);
	console.log(BrooklynTracks);
})

var RooseveltIslandTracksButton = document.querySelector('.startingLocationControl input[value="Roosevelt Island"]');
RooseveltIslandTracksButton.addEventListener("click", () => {
	insertTracks(RooseveltIslandTracks);
	console.log(RooseveltIslandTracks);
})

var GramercyTracksButton = document.querySelector('.startingLocationControl input[value="Gramercy Park"]');
GramercyTracksButton.addEventListener("click", () => {
	insertTracks(GramercyTracks);
	console.log(GramercyTracks);
})

var LowerEastTracksButton = document.querySelector('.startingLocationControl input[value="Lower East"]');
LowerEastTracksButton.addEventListener("click", () => {
	insertTracks(LowerEastTracks);
	console.log(LowerEastTracks);
})


//filter looped

var loopedTracksButton = document.querySelector('.loopedControl input[value="Looped"]');
loopedTracksButton.addEventListener("click", () => {
	insertTracks(loopedTracks);
	console.log(loopedTracks);
})

var notloopedTracksButton = document.querySelector('.loopedControl input[value="Not Looped"]');
notloopedTracksButton.addEventListener("click", () => {
	insertTracks(notloopedTracks);
	console.log(notloopedTracks);
})




//DEFINING FUNCTIONS

// //Miles function
// function getTracksWithMilesFunction(miles) {
// 	var getTracksWithMiles = tracks.filter((tracks) => {
// 		return tracks['miles'].includes(miles);
// 	})


// 	return getTracksWithMiles;
// }

// //Review  function
// function getTracksWithReviewFunction(review) {
// 	var getTracksWithReview = tracks.filter((tracks) => {
// 		return tracks['review'].includes(review);
// 	})


// 	return getTracksWithReview;
// }


// //Starting Location function
// function getTracksWithStartingLocationFunction(startingLocation) {
// 	var startingLocation = tracks.filter((tracks) => {
// 		return tracks['startingLocation'].includes(startingLocation);
// 	})


// 	return getTracksWithStartingLocation;
// }


// //Looped function
// function getTracksWithLoopedFunction(looped) {
// 	var looped = tracks.filter((tracks) => {
// 		return tracks['looped'].includes(looped);
// 	})


// 	return getTracksWithLooped;
// }

// //EVENT LISTENERS

// // miles button

// var milesButtonElements = document.querySelectorAll('.milesControl input');

// milesButtonElements.forEach((button) => {
// 	button.addEventListener('click', (event) => {
// 		var miles = event.target.value;
// 		var tracks = getTracksWithMilesFunction(miles);
// 		insertTracks(tracks);
// 	});
// });

// //review button

// var reviewControlElements = document.querySelectorAll('.reviewControl input');

// reviewControlElements.forEach((button) => {
// 	button.addEventListener('click', (event) => {
// 		var review = event.target.value;
// 		var tracks = getTracksWithReviewFunction(review);
// 		insertTracks(tracks);
// 	});
// });

// //Starting Location button

// var startingLocationControlElements = document.querySelectorAll('.startingLocationControl input');

// startingLocationControlElements.forEach((button) => {
// 	button.addEventListener('click', (event) => {
// 		var startingLocation = event.target.value;
// 		var tracks = getTracksWithStartingLocationFunction(startingLocation);
// 		insertTracks(tracks);
// 	});
// });

// //Looped button

// var loopedControlsElements = document.querySelectorAll('.looped input');

// loopedControlsElements.forEach((button) => {
// 	button.addEventListener('click', (event) => {
// 		var looped = event.target.value;
// 		var tracks = getTracksWithLoopedFunction(looped);
// 		insertTracks(tracks);
// 	});
// });



// console.log(data.js);