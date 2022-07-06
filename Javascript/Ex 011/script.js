alert(5 % 2);

function pairOdd(a) {
    let n = Number(a);

    if (n % 2 == 0){
        return alert(`The number ${n} is PAIR!`);
    } else {
        return alert(`The number ${n} is ODD!`)
    }
}

function multiple(a, b) {
    let n1 = Number(a), n2 = Number(b);

    document.getElementById('res_mult').innerHTML = n1 * n2;
}

function discount5(a) {
    let n = Number(a);
    let disc5 = 0.05 * n;

    document.getElementById('p_disc5').innerHTML = `5% of discount for ${n} is ${disc5}!`;
}

function greaterLess18() {
    let age = document.getElementById('age').value,
    greatLess = (age >= 18) ? `You are over 18!`:`You are under 18!`;

    document.getElementById('p_age').innerHTML = greatLess;
}
