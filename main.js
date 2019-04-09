"use strict";

const face = document.querySelector(".face");
const page = document.querySelector(".page");

function eye1 () {
    face.innerHTML = ';)';
}

function eye2 () {
    face.innerHTML = ':)';
}

face.addEventListener('mouseout', eye1 );
page.addEventListener('click', eye2 );