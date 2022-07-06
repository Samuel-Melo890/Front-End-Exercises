function sortArray() {
    //Adding a new property to the Array Object
    Array.prototype.bubbleSort = function () {
        //Declaring the variable sorted
        let sorted = false;

        //Sorting the array
        while(!sorted) {
            let helper = 0;
            let trades = 0;

            //One check
            for (let i = 0; i < this.length; i++) {
                //If the value is higher than its successor
                if (this[i] > this[i + 1]) {
                    //Exchanging the values
                    helper = this[i];
                    this[i] = this[i + 1];
                    this[i + 1] = helper;

                    //Counting one more exchange
                    trades += 1;
                }
            }

            //When no exchange happens on the array
            if (trades == 0) {
                sorted = true;
            }
        }

        //Returning the sorted array
        return this;
    }

    const myArray = [random(), random(), random(), random(), random(), random(), random()];

    document.getElementById('sorted').innerHTML = 
    `Array generated: ${myArray}<br>\
    Array sorted: ${myArray.bubbleSort()}`;
}

function random() {
    //Creating a base variable to define the random number to be negative or not
    let signal = Math.random();

    //Getting a random number accordingly with the signal value
    if (signal > 0.5) {
        return Math.floor(Math.random() * 51);
    } else {
        return -(Math.floor(Math.random() * 51));
    }
}

function sortObjects() {
    try {
        //Declaring variables
        let options = document.getElementsByName('options');
        let sorted = document.getElementById('sortedObjects');
        let attr = '';
        const myArray = [
            {
                firstName: "Jeanne",
                age: 19,
                lastName: "D'arc"
            },
            {
                firstName: "George",
                age: 45,
                lastName: "Arthur"
            },
            {
                firstName: "Amelia",
                age: 23,
                lastName: "Rosie"
            }
        ]

        //Getting the sort parameter
        if (options[0].checked) {
            attr = options[0].value;
        } else if (options[1].checked) {
            attr = options[1].value;
        } else {
            attr = options[2].value;
        }

        //Sorting the array
        if (attr == 'firstName' || attr == 'lastName') {
            myArray.sort(function (a, b) {
                let x = a[attr].toLowerCase();
                let y = b[attr].toLowerCase();

                if (x > y) {
                    return 1;
                } else if (x < y) {
                    return -1;
                } else {return 0}
            })
        } else {
            myArray.sort(function (a, b) {
                return a[attr] - b[attr];
            })
        }

        //Displaying the array
        sorted.innerHTML = '';
        for (let i in myArray) {
            sorted.innerHTML += 
            `<b>First Name:</b> ${myArray[i].firstName}<br>\
            <b>Age:</b> ${myArray[i].age} years old<br>\
            <b>Last Name:</b> ${myArray[i].lastName}\
            <hr>`;
        }
    }
    catch(error) {
        alert(error);
    }
}
