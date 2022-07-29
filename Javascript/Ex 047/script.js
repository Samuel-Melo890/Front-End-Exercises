//Verifies if a random number is odd or not
function isOdd(random, display) {
    debugger;
    //Declarating variables
    let number = random(100);
    let text = '';

    //Checking if the number is odd or not
    if (number % 2 == 0) {
        text = `The number ${number} is pair!`;
    } else {
        text = `The number ${number} is odd!`;
    }

    //Displaying content
    display(text);
}

//Generates a random number between 0 and 99
function rand(n) {
    return Math.floor(Math.random() * n);
}

//Displays content
function display(content) {
    //Getting display
    let disp = document.querySelector('#display');

    disp.innerHTML = '<b>Overall Display:</b><br>';
    disp.innerHTML += content;
}