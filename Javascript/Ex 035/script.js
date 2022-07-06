function checkInput() {
    try {
        let max = Number(document.getElementById('max').value);
        let min = Number(document.getElementById('min').value);

        if (min > max) {
            throw 'Error! The min number MUST be lower than the max one!';
        }
    }
    catch(error) {
        alert(error);
        document.getElementById('min').value = null;
    }
}

function showInterval() {
    try {
        let max = document.getElementById('max').value;
        let min = document.getElementById('min').value;
        let interval = document.getElementById('interval');

        if (max == '' || min == '') {
            throw 'Error! You need to insert a value on each input!';
        }

        max = Number(max);
        min = Number(min);
        interval.textContent = `The numbers between ${min} and ${max} that are multiples of \
        both 2 and 3 are: `;

        for (let i = min; i <= max; i++) {
            if (i % 6 == 0) {
                interval.textContent += `${i}; `;
            }
        }
    }
    catch(error) {
        alert(error);
    }
}

function calculateFact() {
    try {
        let timeStart = (new Date()).getMilliseconds();
        let timeEnd = undefined;
        let num = document.getElementById('factorial').value;
        let factorial = 1;

        if (num == '' || num < 0) {
            throw 'Error! You need to digit a positive number in order to get its factorial!';
        }

        num = Number(num);

        if (num > 0) {
            for (let i = num; i > 0; i--) {
                factorial *= i;
            }
        } else {factorial = 0;}

        alert(`The factorial of ${num} is ${factorial}!`);

        timeEnd = (new Date()).getMilliseconds();
        document.getElementById('executionTime').textContent = `The execution time was \
        ${Math.abs(timeEnd - timeStart)} milliseconds`;
    }
    catch(error) {
        alert(error);
    }
}
