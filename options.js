// Copyright 2019 Paper.io 2 Stats Counter contributors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be found in the LICENSE file.

'use strict';

chrome.storage.sync.get(['profile1'], function(result) {
	document.getElementById("name").textContent = JSON.stringify(result);
});