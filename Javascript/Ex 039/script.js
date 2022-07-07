"use strict";
function showElements() {
    try {
        //Declaring variables
        const myArray = [4, 2, -5, 9, 1, -3, -7, -2, 6, 10];
        let elements = [];
        let elNumber = document.querySelector('input#elementsNumber');
        let display = document.getElementById('elements');

        debugger;
        //Data validation
        if (elNumber.value == '') {
            throw "ERROR! You MUST set the number of elements you want to show!";
        } else if (Number(elNumber.value) < Number(elNumber.min)) {
            throw "ERROR! You inserted a value lower than the min value!";
        } else if (Number(elNumber.value) > Number(elNumber.max)) {
            throw "ERROR! You inserted a value higher than the max value!";
        }

        //Getting the elements
        elements = myArray.slice(0, Number(elNumber.value));

        //Displaying elements
        display.innerHTML = `<b>Full array:</b> ${myArray}<br>\
        <b>First ${elNumber.value} elements:</b> ${elements}`;
    }
    catch(error){
        alert(error);
        document.getElementById('elementsNumber').value = '';
    }
}

function showNewSequency() {
    try {
        //Declaring variables
        let sequency = document.getElementById('sequency').value;
        let display = document.getElementById('newSequency');
        const myArray = [];

        debugger;
        //Data Validation
        if (sequency == '' || Number(sequency) < 0) {
            throw "ERROR! Please digit a valid positive number!";
        }

        //Getting old sequency
        for (let i of sequency) {myArray.push(i);}
        
        //Setting new sequency
        for (let i in myArray) {
            if (myArray[i] % 2 == 0 && myArray[Number(i) + 1] % 2 == 0) {
                myArray[i] = myArray[i] + '-';
            }
        }
        
        //Displaying new sequency
        display.innerHTML = '<b>New sequency =></b> ';
        for (let i of myArray) {
            display.innerHTML += `${i}`;
        }
    }
    catch(error) {
        alert(error);
        document.getElementById('sequency').value = '';
    }
}

function showSumSquares(myCallback) {
    try {
        //Declaring variables
        const myArray = [myCallback(), myCallback(), myCallback(), myCallback(), myCallback()];
        const squares = myArray.map((value) => {return value ** 2;});
        let sum = squares.reduce((total, value) => {return total + value;});
        let display = document.getElementById('sumSquares');

        //Displaying content
        display.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            display.innerHTML += 
            `Number ${i + 1} => ${myArray[i]} => <b>${squares[i]}</b><br>`;
        }
        display.innerHTML += `Sum of all squares: <b>${sum}</b>`;
    }
    catch(error) {
        alert(error);
    }
}

function rand() {
    return Math.floor(Math.random() * 10) + 1;
}
