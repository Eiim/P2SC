var callback = function(mutations, observer) {
	// Checking for falsey mutation value to short-circuit and prevent errors
	// I'm sure there will never be more than one attribute mutation at a time, right? 
	if(mutations[0] && mutations[0].oldValue === "display: none;") {
		
		// Game is now over
		console.log("Recording data!");
		var data = {};
		switch(document.getElementsByClassName("c")[0].textContent) {
			case "Paper.io 2":
				var timeArray = document.getElementsByClassName("da_pt")[0].textContent.split(":");
				data = {
					mode: "paper2_classic",
					kills: parseInt(document.getElementsByClassName("da_pk")[0].textContent),
					score: parseFloat(document.getElementsByClassName("da_sc")[0].textContent),
					time: timeArray[0]*60+parseInt(timeArray[1])
				};
				break;
			default:
				console.log("Tried to record unknown game mode "+document.getElementsByClassName("c")[0].textContent);
		}
		if(data.mode) {
			chrome.runtime.sendMessage(data, function(response) {
				// TODO: add response to add a nice message to the page, eg: "That was a great game!" or "Average score: 11.25%".
				console.log(response);
			});
		}
	}
};

var observer = new MutationObserver(callback);

observer.observe(document.getElementById("game_over"), {attributes: true, attributeOldValue: true});

console.log("Done setting the observer @ "+(new Date).getTime());