chrome.runtime.onMessage.addListener(
	function(data, sender) {
		console.log(data);
		switch(data.mode) {
			case "paper2_classic":
				console.log("Rate: "+1000*data.score/data.time+"%/s");
				break;
			default:
				console.log("Unknown mode recieved!");
		}
	}
);