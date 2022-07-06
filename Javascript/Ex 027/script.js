function showHigher() {
    let n1 = Number(document.getElementById('number1').value);
    let n2 = Number(document.getElementById('number2').value);
    let n3 = Number(document.getElementById('number3').value);

    if (n1 >= n2 && n1 >= n3) {
        alert(`The higher number is ${n1}!`);
    } else if (n2 >= n1 && n2 >= n3) {
        alert(`The higher number is ${n2}!`);
    } else if (n3 >= n1 && n3 >= n2) {
        alert(`The higher number is ${n3}`);
    }
}

function checkAge() {
    let age = Number(document.getElementById('numberAge').value);
    let over18 = (age > 18) ? "You are over 18.":"You are not over 18";

    alert(over18);
}

function calculateAverage() {
    let n1 = parseFloat(prompt("Digit number 1: "));
    let n2 = parseFloat(prompt("Digit number 2: "));
    let n3 = parseFloat(prompt("Digit number 3: "));
    let average = ((n1 + n2 + n3) / 3).toFixed(2);

    alert(`The average between ${n1}, ${n2} and ${n3} is ${average}!`);
}

function calculateIMC() {
    let h = parseFloat(prompt("Your height: "));
    let w = parseFloat(prompt("Your weight: "));
    let imc = (w / h ** 2).toFixed(2);

    alert(`Your IMC is ${imc}!`)
}

function showSumMultiples() {
    let i = 1;
    let sum3 = 0;
    let sum5 = 0;

    while (i <= 1000) {
        sum3 += (i % 3 == 0) ? i:0;
        sum5 += (i % 5 == 0) ? i:0
        i++;
    }

    alert(`The sum of all numbers that are multiples of 3 or 5 between 1 and 1000 is:\
    ${sum3 + sum5}`);
}
