function showLength() {
    debugger;
    //Creating some objects
    const person = {
        getFullName: function () {return this.fName + ' ' + this.lName;},
        getAge: function () {return this.age;},
        getStatus: function () {return this.status;},
        getLen: function () {
            let count = 0;
            for (let p in this) {
                count += 1;
            }
            return count;
        }
    };
    const person1 = {
        fName: "Jeanne",
        lName: "D'arc",
        age: 19,
        status: "Warrior"
    };

    //Displaying object with call()
    document.querySelector('#person').innerHTML = 
    `<b>Object:</b><br>\
    Full name: ${person.getFullName.call(person1)}<br>\
    Age: ${person.getAge.call(person1)}<br>\
    Status: ${person.getStatus.call(person1)}<br>\
    Length of the object: ${person.getLen.call(person1)} properties`;
}

function showMethods() {
    //Creating display
    let display = document.getElementById('methods');

    //Creating an object to get methods
    const method = {
        methods: function () {
            let count = 0;

            for (let p in this) {
                if (typeof this[p] == 'function') {
                    count += 1;
                }
            }
            return count;
        }
    };

    //Creating a simple object
    const person = {
        fName: "Sam",
        lName: "Rodrigues",
        age: 33,
        alive: false,
        birthYear: function () {return (new Date).getFullYear() - this.age;},
        fullName: function () {return this.fName + ' ' + this.lName;}
    };

    //Displaying object and methods
    display.innerHTML = '<b>Object properties:</b><br>';
    for (let i in person) {
        display.innerHTML += `${i} => ${person[i]}<br>`;
    }
    display.innerHTML += `<br>Number of methods => ${method.methods.apply(person)}`;
}

function showBind() {
    debugger;
    //Declaring variables
    const person = {
        fullName: function () {
            let display = document.getElementById('bind');

            display.innerHTML = `<b>Name:</b> ${this.firstName} ${this.lastName}<br>\
            <b>Nickname:</b> ${this.nickName}`;
        }
    };
    const person1 = {
        firstName: 'Samuel',
        lastName: 'Rodrigues',
        nickName: 'Jetstream Sam',
    };

    //Displaying object
    dis = person.fullName.bind(person1);
    dis();
}
