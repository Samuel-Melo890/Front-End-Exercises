function show2Potency() {
    let exp = 0;
    let display = document.getElementById('2potency');

    display.innerHTML = '';
    while (exp < 9) {
        display.innerHTML += `2<sup>${exp}</sup> = ${2 ** exp}<br>`;
        exp++;
    }
}

function show3Potency() {
    let exp = 0;
    let display = document.getElementById('3potency');

    display.innerHTML = '';
    for (; exp < 9; exp++) {
        display.innerHTML += `3<sup>${exp}</sup> = ${Math.pow(3, exp)}<br>`;
    }
}
