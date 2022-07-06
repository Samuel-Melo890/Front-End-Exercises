function sum() {
    /*This function takes the values of the inputs 's1' and 's2', transforms them
    to Numbers and then modifies the HTML content of the paragraph 'result' to 
    's1 + s2'.*/

    const s1 = Number(document.getElementById('s1').value),
    s2 = Number(document.getElementById('s2').value);

    document.getElementById('result').innerHTML = s1 + s2;
};

function red() {
    // Turns the body background color to red
    document.getElementById('body').style.backgroundColor = 'red';
};

function green() {
    // Turns the body background color to green
    document.getElementById('body').style.backgroundColor = 'green';
};

function loaded() {
    document.getElementById('loaded').innerHTML = 'The page is fully loaded!';
};

function loadedAgain() {
    document.getElementById('loaded').innerHTML = 'The page is already loaded!';
};
