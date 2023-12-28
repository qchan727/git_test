"use strict";

const container = document.querySelector("#container");

const paragraph1 = document.createElement("p");
const header3 = document.createElement("h3");
const div = document.createElement("div");

paragraph1.textContent = "Hey I'm red!";
header3.textContent = "I'm a blue h3!";
div.setAttribute("style", "border: black 1; background-color: pink;");

const paragraph2 = document.createElement("p");
const header1 = document.createElement("h1");

paragraph2.textContent = "ME TOO!";
header1.textContent = "I'm in a div";

div.appendChild(header1);
div.appendChild(paragraph2);

container.appendChild(paragraph1);
container.appendChild(header3);
container.appendChild(div);
