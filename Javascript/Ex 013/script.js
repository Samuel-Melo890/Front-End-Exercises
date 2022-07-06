function show() {
    let i = 0;

    document.getElementById('result').innerHTML = '';
    while (i < 11) {
        document.getElementById('result').innerHTML += `${i} `;
        i++;
    }
}