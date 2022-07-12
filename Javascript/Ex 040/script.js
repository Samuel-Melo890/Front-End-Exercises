function filterArray() {
    //Declaring variables
    const myArray = 
    [1, 5, 10, 456, 21, 45, 82, 104, 54, 83, 349, 934];
    const filteredArray = myArray.filter((value) => {
        return value % 2 == 0;
    });
    
    //Displaying content
    document.getElementById('filtered').innerHTML = 
    `Standard array => ${myArray}<br>Filtered array => ${filteredArray} (Only pair numbers)`;
}

function showSumProduct() {
    //Declaring variables
    const mySet = new Set();
    let sum = 0;
    let product = 1;
    let display = document.getElementById('sumProduct');

    //Set validation
    while (mySet.size < 5) {
        mySet.add(rand());
    }

    //Calculating sum
    mySet.forEach((value) => {sum += value;});

    //Calculating product
    mySet.forEach((value) => {product *= value;});

    //Displaying sum and product
    display.innerHTML = '<b>Set</b> => ';
    for (let i of mySet) {
        display.innerHTML += `${i}, `;
    }
    display.innerHTML += `<br><b>Sum</b> => ${sum}<br>\
    <b>Product</b> => ${product}`;
}

function rand() {
    //Generating a random number
    return Math.floor(Math.random() * 10) + 1;
}

//Selects the pair of values whose sum is equal to the target value
function sumTarget() {
    try {
        //Getting input
        let target = document.getElementById('target').value;

        //Declaring variables
        const mySet = new Set();
        let values = [];
        let positions = [];
        let display = document.getElementById('sumTarget');

        debugger;
        //Input validation
        if (Number(target) < 0 || target == '') {
            throw "ERROR! Please digit a valid positive number!";
        }
        target = Number(target);

        //Setting set values
        while (mySet.size < 10) {
            mySet.add(rand());
        }

        //Getting positions
        mySet.forEach((value) => {values.push(value);});

        for (let i in values) {
            if (values[i] + values[Number(i) + 1] == target) {
                positions.push(`Indeces ${i} and ${Number(i) + 1}`);
            }
        }

        //Displaying content
        display.innerHTML = 'Set => ';
        mySet.forEach((value) => {
            display.innerHTML += `${value}, `;
        })
        
        display.innerHTML += '<br>Positions => ';
        positions.forEach((value) => {
            display.innerHTML += `${value};<br>`;
        })
    }
    catch(error) {
        alert(error);
    }
}


