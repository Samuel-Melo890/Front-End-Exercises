//Setting functions
function hello() {
    //Creating promise
    let myHelloPromise = new Promise(function (myResolve, myReject) {
        let x = 
        "Hello World! This is my first test with Javascript Promises! I hope you've enjoyed it!";

        if (x != '') {
            myResolve(x);
        } else {
            myReject("ERROR!");
        }
    });

    //Displaying promise
    myHelloPromise.then(
        function(value) {alert(value);},
        function(error) {alert(error);}
    );
}

function oddPair(number) {
    //Creating promise to check number
    let myOddPairPromise = new Promise(function (resolve, reject) {

        //Data validation
        if (number == '') {
            reject("ERROR! The user didn't insert any number or the value is not a valid one!");
        }

        //Creating num variable to hold parameter's value
        let num = Math.abs(Number(number));

        //Checking if num is pair or odd
        let result = (num % 2 == 0) ? "EVEN":"ODD";
        resolve(result);
    });

    //Executing promise
    myOddPairPromise.then(
        function (value) {
            if (value == 'EVEN') {
                setTimeout(alert, 2000, `The number is ${value}!`);
            } else {
                setTimeout(alert, 1000, `The number is ${value}!`);
            }
        },
        function (error) {
            alert(error);
            document.getElementById('num').value = '';
        }
    );
}

function display(content) {
    alert(content);
}

async function fetchCountry(country) {
    //Fetching json
    const res = await fetch('./countries.json');
    let countries = await res.json();

    //Data validation
    const c = Array.from(country);
    let specifiedCountry;
    let result = false;
    let text;

    for (let i = 0; i < c.length; i++) {
        if (i == 0) {
            c[i] = c[i].toUpperCase();
        } else if (c[i - 1] == ' ') {
            c[i] = c[i].toUpperCase();
        }
    }
    specifiedCountry = c.join('');

    //Searching for specified country
    for (let i in countries) {
        if (countries[i]['name'] == specifiedCountry) {
            result = true;
            break;
        }
    }

    //Returning content
    text = result ? `YES! The country ${specifiedCountry} exists in the countries list!`:`OH NO! The country ${specifiedCountry} doesn't exist in the countries list!`;
    return text;
}
