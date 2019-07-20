var callback = function(mutations, observer) {
	// Checking for falsey mutation value to short-circuit and prevent errors
	// I'm sure there will never be more than one attribute mutation at a time, right? 
	if(mutations[0] && mutations[0].oldValue === "display: none;") {
		// Game is now over
		console.log("Recording data!");
		switch(game_mode) {
			case "paper2_classic":
				if(typeof paper2_results === "undefined") {
					console.log("No paper2 results!");
				} else {
					chrome.runtime.sendMessage({
						mode: "paper2_classic",
						kills: paper2_results["kills"],
						score: paper2_results["score"],
						time: paper2_results["time"],
						win: paper2_results["win"]
					});
				}
				// TODO: add response to add a nice message to the page, eg: "That was a great game!" or "Average score: 11.25%".
				break;
			default:
				console.log("Tried to record unknown game mode!");
		}
	}
};

var observer = new MutationObserver(callback);

observer.observe(document.getElementById("game_over"), {attributes: true, attributeOldValue: true});

console.log("Done setting the observer @ "+(new Date).getTime());