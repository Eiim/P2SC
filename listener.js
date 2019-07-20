// Copyright 2019 Paper.io 2 Stats Counter contributors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be found in the LICENSE file.

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