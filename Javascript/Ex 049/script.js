async function inOrder(number1, number2) {
    //Awaiting for the results in order
    console.time("First await");
    let n1 = await number1();
    console.timeEnd("First await");

    console.time("Second await");
    let n2 = await number2();
    console.timeEnd("Second await");
}

function rand() {
    //Return an alert of a random number between 0 and 99 after a random time
    setTimeout(alert, Math.floor(Math.random() * 1000), `Random Number: ${Math.floor(Math.random() * 100)}`);
}