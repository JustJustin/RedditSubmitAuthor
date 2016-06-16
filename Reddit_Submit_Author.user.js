// ==UserScript==
// @name        Reddit Submit Author
// @namespace   justjustin
// @description Shows your account when submitting on Reddit.
// @include     https://www.reddit.com/r/*/submit*
// @include     http://www.reddit.com/r/*/submit*
// @version     1
// @grant       none
// ==/UserScript==

var name = document.querySelector("div#header-bottom-right span.user a").innerHTML;

var topInput = document.querySelector("div.content form div.formtabs-content div.spacer");
var newSpacer = document.createElement("div");
newSpacer.classList.add("spacer");

var field = document.createElement("div");
field.classList.add("roundfield");
newSpacer.appendChild(field);

var fieldSpan = document.createElement("span");
fieldSpan.classList.add("title");
fieldSpan.innerHTML = "author";
field.appendChild(fieldSpan);

var fieldDiv = document.createElement("div");
fieldDiv.classList.add("roundfield-content");
fieldDiv.innerHTML = "You are posting as " + name + "!";
field.appendChild(fieldDiv);

topInput.parentNode.insertBefore(newSpacer, topInput.nextSibling);