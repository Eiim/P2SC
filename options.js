// Copyright 2019 The Chromium Authors and Paper.io 2 Stats Counter contributors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be found in the LICENSE file.

'use strict';

let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let a = document.createElement('a');
    a.href = 'popup.html';
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    a.appendChild(button);
    page.appendChild(a);
		chrome.storage.sync.get(['profile1'], function(result) {
			document.getElementById("name").textContent = JSON.stringify(result);
		});
  }
}
constructOptions(kButtonColors);
