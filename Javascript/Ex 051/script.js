"use strict";

// Function to check if a string is a valid JSON
const checkJSON = (() => {
    // Getting HTML elements
    let display = $('#checkJSON');

    return (string) => {
        try {
            JSON.parse(string);
            display.text(`The string ${string} is a valid JSON!`).css('color', 'green');
        } 
        catch(error) {
            display.text(`The string ${string} is NOT a valid JSON!`).css('color', 'red');
        }
    }
})();
$(`button:first`).click(() => checkJSON(`{"name": "Jeanne", "age": 19}`));

// Getting a JSON object with RPG Classes to display them
const showRpgClasses = () => {
    let xhttp = new XMLHttpRequest();

    xhttp.onload = () => {
        // Getting object with classes and the display element
        const rpg = JSON.parse(xhttp.responseText);
        let display = document.getElementById('rpgAttr');

        display.innerHTML = `<b>RPG Classes</b><br>`;
        for (let i in rpg) {
            display.innerHTML += 
            `${i.toUpperCase()} => Health: ${rpg[i].health} | Damage: ${rpg[i].damage} | Speed: ${rpg[i].speed}<br>`;
        }
    };
    xhttp.open('GET', './json/rpg.json', true);
    xhttp.send();
};
$('#rpg').click(showRpgClasses);

// Function to generate and write a JSON in a JSON File
const writeJSON = (() => {
    // Creating the object to be writen in the JSON
    const obj = {
        name: "Roger",
        age: 45,
        favFood: "Melons",
        job: "Programmer"
    };
    let myJSON = JSON.stringify(obj);

    sessionStorage.setItem('myJSON', myJSON);
})();

$('#writeJSON').click(() => {
    alert(`The item in Session Storage containing the JSON is:\n\
    ${sessionStorage.key(0)}: ${sessionStorage.getItem('myJSON')}`);
});
