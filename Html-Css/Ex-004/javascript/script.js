"use strict";

// Function to show the navBar on smaller devices
document.querySelector('#linkIcon').addEventListener(`click`, () => document.querySelector('#navBar').style.display = 'flex');

//Function to hide the navBar on smaller devices
document.querySelector(`.navLink:first-of-type`).addEventListener('click', () => {
    if (window.innerWidth < 768) {
        document.querySelector('#navBar').style.display = 'none';
    }
});

/* Function to guarantee that some elements will not have the wrong display when the user resizes the window */
onresize = () => {
    if (window.innerWidth >= 768) {
        document.querySelector('#navBar').style.display = 'flex';
    } else {
        document.querySelector('#navBar').style.display = 'none'; 
    }
}