console.log("Setting the watch!");

document.getElementById("game_over").style.watch("display", function(ignore, oldVal, newVal) {
	console.log(ignore+" updated from "+oldVal+" to "+newVal);
	if(newVal === "block") {
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
});