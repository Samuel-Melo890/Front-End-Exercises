const char = ["Jeanne D'arc", "Goku", "Vegeta"];
const num = [24, 12, 56, 33, 7, 18, 4];

function showChar() {
    document.getElementById('char_array').innerHTML = char;
};

function addChar() {
    let charName = document.getElementById('add_char').value;

    char[char.length] = charName;
    document.getElementById('add_char').value = '';
};

function showNum() {
    document.getElementById('num_array').innerHTML = num;
};

function sortNum() {
    document.getElementById('num_array').innerHTML = num.sort(function (a,b) {return a - b} );
};

function sortDescNum() {
    document.getElementById('num_array').innerHTML = num.sort(function (a,b) {return b - a});
};
