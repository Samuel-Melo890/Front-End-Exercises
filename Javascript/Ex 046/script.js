"use strict";

//Special Multiply
//Creating Closure
const result = function (a=undefined, b=undefined) {
    return (function () {
        if (a != undefined && b == undefined) {
            return (function (x) {
                return Number(a) * x;
            });
        } else if (a == undefined && b == undefined) {
            return "You need at least one value to execute this function!";
        } else {
            return Number(a) * Number(b);
        }
    })();
};

//Displaying closure
function specialMultiply() {
    //Getting display
    let display = document.getElementById('specialMultiply');
    let list = document.createElement('ol');
    let case1 = document.createElement('li');
    let case2 = document.createElement('li');
    let case3 = document.createElement('li');

    case1.innerHTML = `<b>Multiplying 3 with nothing</b> => ${result(3)}`;
    case2.innerHTML = `<b>Multiplying nothing with nothing</b> => ${result()}`;
    case3.innerHTML = `<b>Multiplying 4 with 3</b> => ${result(4, 3)}`;
    list.appendChild(case1);
    list.appendChild(case2);
    list.appendChild(case3);

    //Displaying content
    display.innerHTML = '';
    display.appendChild(list);
}

//Guessing Game
//Closure
const guess = (function () {
    //Private variables
    let number = Math.floor(Math.random() * 10);
    let guesses = 0;
    let attempt;

    //Guessing function returned
    return (function () {
        try {
            //Guess input
            attempt = Number(prompt('Try to guess the number! It is between 0 and 9!\nYour attempt: '));

            //Data validation
            if (isNaN(attempt)) {
                throw "ERROR! You need to insert a Number"
            }

            //Checking guess
            switch (attempt == number) {
                case true:
                    alert(`Congratulations! You got it! The number was ${number}!\nGuesses used: ${guesses + 1}`);
                    number = Math.floor(Math.random() * 10);
                    guesses = 0;
                    attempt = undefined;
                    break;
                default:
                    if (attempt > number) {
                        alert('You FAILED! The number is lower than this!');
                    } else {
                        alert('You FAILED! The number is higher than this!');
                    }
                    guesses += 1;
            }
        }
        catch(error) {
            alert(error);
        }
    })
})();
