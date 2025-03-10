// Copyright 2019 Paper.io 2 Stats Counter contributors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be found in the LICENSE file.

'use strict';

let nameInput = document.getElementById("nameInput");
let begin = document.getElementById("begin");

begin.onclick = function() {
	if(nameInput.value.length === 0) {
		window.alert("Please enter a name!");
	} else {
		let newProfile = {};
		newProfile["profile_name"] = nameInput.value;
		newProfile["data_format"] = 3;
		chrome.storage.sync.set({'profile1' : newProfile});
    window.location.href = "popup.html";
	}
}