function searchWord() {
    const txt = document.getElementById('text1').innerHTML;
    let word = document.getElementById('word').value;
    let t = new RegExp(`${word}`, 'gi');

    if (t.test(txt)) {
        document.getElementById('result').innerHTML = 'Yes!';
    } else {
        document.getElementById('result').innerHTML = 'False!';
    }
}

function randomNumber() {
    let random = Math.floor(Math.random() * 10),
    num = document.getElementById('random').value;

    if (random == num) {
        alert(`You've got it! The number was ${random}! Congratulations!`);
    } else {
        alert(`You've not got it! The number was ${random}!`)
    }
}

function showDate() {
    let d = new Date();

    document.getElementById('p_date').innerHTML = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} and the next month is ${d.getMonth() + 2}!`;
}
