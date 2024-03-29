//select our container element
var containerElement = document.querySelector('.Container');

// should I do that for all the filters (miles, review, starting location and looped

//insert single track function
function insertrack(track) {


	containerElement.innerHTML += `
		<article class="Track" data-track="${ track['title'] }">
			<h2>${ track['title'] }</h2>
			<img src="media/${ track['image'] }"/>
			<p>${ track['review'] }</p>
		</article>
	`;

// insert review function definition
	insertMiles(track);

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
    return track['Looped'] == true;
})

var notloopedTracks = tracks.filter((track) => {
    return track['Looped'] == false;
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



//DEFINING FUNCTIONS

//Miles function
function getTracksWithMiles(miles) {
        var getTracksWithMiles = tracks.filter((tracks) => {
        return tracks ['miles'].include(miles);
    })

      
 return getTracksWithMiles;
}

//Review  function
function getTracksWithReview(review) {
    var getTracksWithReview = tracks.filter((tracks) => {
    return tracks ['review'].include(review);
    })

     
 return getTracksWithReview;
}


//Starting Location function
function getTracksWithStartingLocation(startingLocation) {
	var startingLocation = tracks.filter((tracks) => {
	return tracks['startingLocation'].includes(startingLocation);
	})

 
 return getTracksWithStartingLocation;
}


//Looped function
function getTracksWithLooped(looped) {
	var looped = tracks.filter((tracks) => {
	return tracks['looped'].includes(looped);
	})

 
 return getTracksWithLooped;
}
    
//EVENT LISTENERS

// miles button

var MilesButtonElements = document.querySelectorAll('.milesControl input');

milesButtonElements.forEach((button) => {
    button.addEventListener('click', (event) => {
        var miles = event.target.value;
        var tracks = getTracksWithMiles(miles);
        insertTracks(tracks);
    });
});

//review button

var reviewControlElements = document.querySelectorAll('.reviewControl input');

reviewControlElements.forEach((button) => {
	button.addEventListener('click', (event) => {
		var review = event.target.value;
		var tracks = getTracksWithReview(review);
		insertTracks(tracks);
	});
});

//Starting Location button

var startingLocationControlElements = document.querySelectorAll('.startingLocationControl input');

startingLocationControlElements.forEach((button) => {
	button.addEventListener('click', (event) => {
		var startingLocation = event.target.value;
		var tracks = getTracksWithStartingLocation(startingLocation);
		insertTracks(tracks);
	});
});

//Looped button

var loopedControlsElements = document.querySelectorAll('.looped input');

loopedControlsElements.forEach((button) => {
	button.addEventListener('click', (event) => {
		var  looped = event.target.value;
		var tracks = getTracksWithLooped(looped);
		insertTracks(tracks);
	});
});



console.log(data);