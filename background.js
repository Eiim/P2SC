// Copyright 2019 Paper.io 2 Stats Counter contributors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be found in the LICENSE file.

'use strict';

var rule = {
	conditions: [new chrome.declarativeContent.PageStateMatcher({
		pageUrl: {hostEquals: 'paper-io.com'},
	})],
	actions: [new chrome.declarativeContent.ShowPageAction()]
};

chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([rule]);
	});
});

chrome.runtime.onMessage.addListener(
	function(data, sender, sendResponse) {
		var response = "";
		switch(data.mode) {
			case "paper2_classic":
				response = "Rate: "+data.score/data.time+"%/s";
				break;
			default:
				response = "Unknown game mode recieved!";
		}
		// TODO: See TODO in recorder.js
		sendResponse(response);
	}
);