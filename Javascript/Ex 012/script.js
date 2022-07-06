function myRepetition() {
    let re = [1, 2, 3, 4, 5], 
    len = re.length, 
    i = 1,
    index = 1;

    for (let i = 0; i < 20; i++) {
        document.getElementById('repetition1').innerHTML += "Repetition ";
    }

    re.forEach(function() {
        document.getElementById('repetition2').innerHTML += 'Repetition ';
    });

    while (i <= len) {
        document.getElementById('repetition3').innerHTML += 'Repetition ';
        i++;
    }

    do {
        document.getElementById('repetition4').innerHTML += 'Repetition ';
        index++;
    } while (index <= len);
}
