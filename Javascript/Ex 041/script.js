"use strict";

//Generate a map collection for a "person object"
function showMap() {
    //Declaring variables
    const myPerson = new Map();
    let display = document.getElementById('person');
    
    debugger;
    //Creating the map
    myPerson.set('name', draw("Jeanne", "Astolfo", "Robert", "Amelia", "James"));
    myPerson.set('age', draw(23, 15, 67, 45, 39));
    myPerson.set('eyes', draw('Blue', 'Yellow', 'Red', 'Green', 'Grey'));
    myPerson.set('hair', draw('Blonde', 'Brown', 'Black', 'Red'));
    myPerson.set('alive', draw(true, false, true, false, true));
    myPerson.set('status', draw('Peasant', 'Noble', 'Royalty', 'Peasant', 'Peasant'));

    //Displaying the map
    display.innerHTML = 
    `<b>Name:</b> ${myPerson.get('name')}<br>\
    <b>Age:</b> ${myPerson.get('age')}<br>\
    <b>Eyes:</b> ${myPerson.get('eyes')}<br>\
    <b>Hair:</b> ${myPerson.get('hair')}<br>\
    <b>Alive:</b> ${myPerson.get('alive')}<br>\
    <b>Status:</b> ${myPerson.get('status')}`;
}

//Draws randomly an item
function draw() {
    let i = Math.floor(Math.random() * 4);

    while (i > arguments.length) {
        i = Math.floor(Math.random() * 4);
    }
    return arguments[i];
}
