// Copyright 2019 Paper.io 2 Stats Counter contributors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be found in the LICENSE file.

'use strict';

try {
	chrome.storage.sync.get(['profile1'], function(data){
		if(!data["profile1"]["profile_name"]) {
			console.log("Going to nameInput because"+JSON.stringify(data));
			window.location.replace("nameInput.html");
		} else {
			console.log("You already have a profile!");
		}
	});
} catch (e) {
	console.log("Going to nameInput due to error!");
	window.location.replace("nameInput.html");
}

// "Constants" for dropdown option creation
let profileDrop = document.getElementById("profileDropdown");
let gameDrop = document.getElementById("gameDropdown");
let profNums = new Array(16);
const gameIDs = ["paper1_classic", "paper1_small", "paper1_fastspeed", "paper1_turbo", "paper1_smallmapfastspeed", "paper1_slowspeed", "paper1_invertedcontrols", "paper2_classic", "lab_classic", "lab_egypt", "agar_classic", "mini_papervsblocks", "mini_xmas"];
const gameNames = ["Paper.io Classic", "Paper.io Small map", "Paper.io Fast speed", "Paper.io Turbo", "Paper.io Small map + fast speed", "Paper.io Slow speed", "Paper.io Inverted controls", "Paper.io 2", "Classic Labyrinth", "Egypt Labyrinth", "Agarpaper", "Paper vs. Blocks", "Christmas"];
for(var i = 0; i < 16; i++) {
	profNums[i] = i+1;
}

// Helper function for profile option creation
function makeProfOpt(ignore, index) {
	chrome.storage.sync.get("profile"+(index+1),function(data) {
		console.log("profile"+(index+1));
//		console.log(JSON.stringify(data));
//		console.log(data["profile"+(index+1)]);
		// Check if profile exists
		if(data["profile"+(index+1)]) {
			let opt = document.createElement("option");
			opt.value = "profile"+(index+1);
			opt.appendChild(document.createTextNode(data["profile"+(index+1)]["profile_name"]));
			profileDrop.appendChild(opt);
		}
	});
}

// Create gamemode dropdown options
for(var j = 0; j < 13; j++) {
	console.log(gameIDs[j]);
	let opt = document.createElement("option");
	opt.value = gameIDs[j];
	opt.appendChild(document.createTextNode(gameNames[j]));
	gameDrop.appendChild(opt);
}

// Create profile dropdown options
profNums.map(makeProfOpt);