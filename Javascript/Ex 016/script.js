var gods = ['Aegir', 'Aud', 'Balder'];

function showGods() {
    document.getElementById('gods').innerHTML = gods;
    document.getElementById('gods_num').innerHTML = gods.length;

    gods.forEach(alertGods = (value, index) => alert(`The god number ${index + 1} is ${value}`));
}

function showGods2() {
    let gods2 = gods.map(godsUpper = (value) => value.toUpperCase());
    let i = 0;

    do {
        alert(`The god number ${i + 1} is ${gods2[i]}!`);
        i++;
    }
    while (i < gods2.length);
}

function addGod() {
    let godName = document.getElementById('godName').value;

    gods.push(godName);
    document.getElementById('godName').value = '';
}
