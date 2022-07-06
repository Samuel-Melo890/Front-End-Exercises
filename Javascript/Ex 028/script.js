/*const fibo = [0, 1];
    let seq = 0;
    let next = 0;

    do {
        seq++;
        next = fibo[seq] + fibo[seq - 1];

        if (next < 50000) {
            fibo.push(next);
        }
    } while (next < 50000);*/

function showFibonacci() {
    const fibo = [0, 1];
    let next = 0;
    let pair = [];
    let odd = [];
    let sumPair = 0;

    do {
        len = fibo.length;
        next = fibo[len - 1] + fibo[len - 2];

        if (next < 50000) {
            fibo.push(next);

            if (next % 2 == 0) {
                pair.push(next);
                sumPair += next;
            } else {
                odd.push(next);
            }
        }
    } while (next < 50000);

    document.getElementById('fibonacci').innerHTML = 
    `<b>Sequence of Fibonacci (until 50000):</b> ${fibo}<br>\
    <b>Pair Numbers:</b> ${pair}<br>\
    <b>Sum of Pair Numbers:</b> ${sumPair}<br>\
    <b>Odd Numbers:</b> ${odd}`;
}

function showPrimeNumber() {
    let prime1001 = 0;
    let countPrime = 0;
    let division = 0;
    let i = 0;

    for (; countPrime < 1001; i++) {
        for (let i2 = 1; i2 <= i; i2++) {
            let res = i % i2;

            if (res == 0) {
                division += 1
            }
        }
        if (division == 2) {
            countPrime += 1;
        } else {
            division = 0;
        }
        division = 0;

        if (countPrime == 1001) {
            prime1001 = i;
        }
    }

    alert(prime1001);
}

function primeTo200() {
    let i = 0;
    let division = 0;
    let display = document.getElementById('prime_0to200');
    display.innerHTML = '<tr><th>Prime Numbers Between 0 and 200</th></tr>'

    for (; i <= 200; i++) {
        for (let i2 = 1; i2 <= i; i2++) {
            let res = i % i2;

            if (res == 0) {
                division += 1;
            }
        }
        if (division == 2) {
            display.innerHTML += `<tr><td>${i}</td></tr>`;
        } else {
            division = 0;
        }
        division = 0;
    }
}


