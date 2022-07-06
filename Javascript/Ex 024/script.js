"use strict";

function showRandom() {
    let num = Math.floor(Math.random() * 101) + 1;

    alert(`Number: ${num}`);
}

function goToYoutube() {
    open('https://www.youtube.com/');
}

function changeTitle() {
    document.title = document.getElementById('changeTitle').value;
}

function showRest() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let rest = n1 % n2;

    document.getElementById('result').innerHTML = `The rest of the division "${n1} / ${n2}" is \
    ${rest}.`
}
