"use strict";

function validate() {
    debugger;
    let num = document.getElementById('num');
    num.setCustomValidity('');

    if (num.value === "") {
        num.setCustomValidity(`Please digit a number!`);

        alert(num.validationMessage);
        num.value = '';
    } else if (!num.checkValidity()) {
        if (num.validity.rangeOverflow) {
            num.setCustomValidity(`Digit a number less than ${num.max}!`);
        } else if (num.validity.rangeUnderflow) {
            num.setCustomValidity(`Digit a number greater than ${num.min}!`);
        } else if (num.validity.stepMismatch) {
            num.setCustomValidity(`Digit an odd number!`);
        } else if (num.validity.badInput) {
            num.setCustomValidity(`Please digit a number!`);
        }
        
        alert(num.validationMessage);
        num.value = '';
    } else {
        document.write('<h1>Input Successful!</h1>');
    }
}

// Creating a counter with Worker API
function startCount() {
    let w;
    let display = $('#counter');

    if (w === undefined) {
        w = new Worker('./worker.js');
    }

    w.onmessage = (event) => display.html(`${event.data}`).css('color', 'crimson');
}

// Functions to handle the geolocation API
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, showError);
    }
}

function showLocation(pos) {
    let display = document.getElementById('location');
    display.innerHTML = `Latitude: ${pos.coords.latitude}<br>Longitude: ${pos.coords.longitude}<br>Accuracy: ${pos.coords.accuracy}`;

    if (pos.coords.latitude > 0) {
        display.innerHTML += `<br>You're in the North Hemisphere!`;
    } else if (pos.coords.latitude === 0){
        display.innerHTML += `<br>You're in the Equator Line!`;
    } else {
        display.innerHTML += `<br>You're in the South Hemisphere!`;
    }

    if (pos.coords.longitude > 0) {
        display.innerHTML += `<br>You're in the Eastern Hemisphere!`;
    } else if (pos.coords.longitude === 0) {
        display.innerHTML += `<br>You're in the Greenwich Mean Time!`;
    } else {
        display.innerHTML += `<br>You're in the Western Hemisphere!`;
    }
}

function showError(error) {
    $('#location').html(`ERROR &raquo; Code: ${error.code} | Message: ${error.message}`);
    console.error(error);
}
