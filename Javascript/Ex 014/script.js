function pairNumber() {
    document.getElementById('pairs').innerHTML = '';

    for (let x = 0; x < 21; x++){
        if (x % 2 == 0) {
            document.getElementById('pairs').innerHTML += ` ${x}`;
        }
    }
}

function showMult() {
    document.getElementById('mult').innerHTML = '';

    for (let x = 1; x < 11; x++) {
        for (let y = 1; y < 11; y++) {
            document.getElementById('mult').innerHTML += `${x} x ${y} = ${x * y} <br>`;
        }
        document.getElementById('mult').innerHTML += '<br>'
    }
}
