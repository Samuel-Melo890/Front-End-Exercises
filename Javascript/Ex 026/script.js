"use strict";

function showMessage() {
    let num = Number(document.getElementById('numberMessage').value);

    switch (num) {
        case 1:
            alert(`Hey, are you stupid?`);
            break;
        
        case 2:
        case 3:
            alert(`Sorry for what I've done to you.`);
            break;
        
        case 4:
            alert(`I love you man!`);
            break;
        
        default:
            alert(`I'm so happy for you!`);
    }
}

function showMultiplied() {
    let message = document.getElementById('pMessage');
    let n = document.getElementById('numberMultiplied').value;

    if (message.innerHTML != '') {
        message.innerHTML = '';
    }

    while (n > 0) {
        message.innerHTML += `Hello World! <br>`;
        n--;
    }
}
