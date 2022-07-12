"use strict";

//Reverses a number
const reverse = (num) => {
    try {
        //Declaring variables
        const reversed = [];
        let display = document.getElementById('reversed');

        //Data validation
        if (Number(num) < 0 || num == '') {
            throw "ERROR! Please insert a valid positive number!";
        }

        //Getting reversed number array
        for (let i = 0; i < num.length; i++) {
            reversed.unshift(num[i]);
        }

        //Displaying reversed number
        display.innerHTML = `<b>Reversed:</b> ${reversed.join('')}`;
    }
    catch(error) {
        alert(error);
        document.getElementById('num').value = '';
    }
}

//Puts a string in alphabetical order
const alpha = text => {
    const order = (Array.from(text.toLowerCase())).sort();
    let display = document.getElementById('alphabeticalOrder');

    display.style.fontStyle = 'italic';
    display.innerHTML = '<b>Alphabetical Order:</b> ';
    display.innerHTML += order.join('');
}
