function showSlice() {
    const text = document.getElementById('string').innerHTML;
    let pos = (document.getElementById('slice').value).split(',');

    document.getElementById('pSlice').innerHTML = text.slice(Number(pos[0]), Number(pos[1]));
    //text.substr(Number(pos[0]), Number(pos[1]));
    //text.substring(Number(pos[0]), Number(pos[1]));
}

function replaceText() {
    const text = document.getElementById('string');
    let strings = (document.getElementById('replace').value).split(',');
    let oldStr = new RegExp(`${strings[0]}`, 'gi');

    text.innerHTML = text.innerHTML.replace(oldStr, strings[1]);
}

function toUpper() {
    let text = document.getElementById('string');

    text.innerHTML = text.innerHTML.toUpperCase();
}

function toLower() {
    let text = document.getElementById('string');

    text.innerHTML = text.innerHTML.toLowerCase();
}

function searchByIndex() {
    const text = document.getElementById('string').innerHTML;
    let letter = text.charAt(Number(document.getElementById('charat').value));

    document.getElementById('pCharat').innerHTML = `Word found: ${letter}`;
}


