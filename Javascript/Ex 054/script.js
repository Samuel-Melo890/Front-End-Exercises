"use strict";

// Function to show an image
document.getElementById('showImage').addEventListener('click', () => {
    let ajax = new XMLHttpRequest(),
    url = `./sources/landscape.jfif`,
    image = document.querySelector('img');

    image.style.display = (image.src !== '' && image.style.display !== 'none') ? 'none':'block';

    ajax.onreadystatechange = () => {
        console.log(`Current ready state: ${ajax.readyState};`);
    };

    ajax.onload = () => {
        image.src = ajax.responseURL;
        image.alt = `Landscape Image`;

        console.log(`Request Status: ${ajax.status} - ${ajax.statusText}`);
    };
    ajax.open('GET', url, true);
    ajax.send();
});

// Function to get operations results from a number with php !!!! Needs to run in a local host like Wamp Server
document.getElementById('showOperations').addEventListener('click', () => {
    try {
        debugger;
        // Getting ajax object and inputs
        let xhttp = new XMLHttpRequest();
        let input1 = document.querySelector('input#num1');
        let input2 = document.querySelector('input#num2');

        // Validating inputs
        if (input1.value === '' || input2.value === '') {
            alert(`You need to insert a value on both inputs!`);

            input1.value = '';
            input2.value = '';
        } else if (!input1.checkValidity()) {
            alert(`Invalid input:\nNumber 1 => ${input1.validationMessage}`);
            
            input1.value = '';
            input2.value = '';
        } else if (!input2.checkValidity()) {
            alert(`Invalid input:\nNumber 2 => ${input2.validationMessage}`);

            input1.value = '';
            input2.value = '';
        }

        // Getting number values of the inputs
        let num1 = Number(input1.value);
        let num2 = Number(input2.value);

        // Sending request to the server
        xhttp.onload = function () {
            let response = JSON.parse(this.response);

            document.getElementById('operations').innerHTML = 
            `The results are:<br>\
            Sum => ${num1} + ${num2} = ${response.sum}<br>\
            Sub => ${num1} - ${num2} = ${response.sub}<br>\
            Div => ${num1} : ${num2} = ${response.div}<br>\
            Mult => ${num1} x ${num2} = ${response.mult}`;

            console.log(xhttp.response);
        };
        xhttp.open('GET', `./php/operations.php?fNum=${num1}&sNum=${num2}`);
        xhttp.send();
    } 
    catch(error) {
        console.error(error);
    }
});
