"use strict";

//Self-invoking function
(function () {
    alert("Hi guys! This is a example of a self-invoking function! Hope you've enjoyed.");
})();

//Turns the input value into upper case
(function () {
    setInterval(() => {
        let text = document.querySelector('#upper');
        text.value = (text.value).toUpperCase();
    }, 1000);
})();