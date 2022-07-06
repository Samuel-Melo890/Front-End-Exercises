function showObject() {
    //Creating a simple object
    const myObj = {
        firstName: "Jeanne",
        lastName: "D'arc",
        age: 19,
        item: "Sword",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };

    //Displaying the object
    document.getElementById('object1').innerHTML = 
    `Name: ${myObj.fullName()}<br>Age: ${myObj.age} years old<br>Item holded: ${myObj.item}`;
}

function showBooks() {
    //Creating array with some objects
    const books = [
        {
            author: "Bill Gates",
            title: "The Road Ahead",
            readingStatus: true
        },
        {
            author: "Steve Jobs",
            title: "Walter Isaacson",
            readingStatus: true
        },
        {
            author: "Suzanne Collins",
            title: "Mockingjay: The Final Book of The Hunger Games",
            readingStatus: false
        }
    ];
    //Getting the element to display the array
    const booksList = document.getElementById('object2');
    booksList.innerHTML = '';

    //Displaying the array
    for (let i in books) {
        let finished = (books[i].readingStatus == true) ? "Yes":"No";

        booksList.innerHTML += `<b>Book ${i}</b>:<br>\
        Author: ${books[i].author}<br>\
        Title: ${books[i].title}<br>\
        Finished: ${finished}<br>\
        <hr>`
    }
}

function showCylinder() {
    try {
        //Creating class Cylinder
        class Cylinder {
            constructor(radius=0, height=0) {
                this._r = radius;
                this._height = height;
            }
            get volume() {
                return (Math.PI * this._r ** 2 * this._height).toFixed(4);
            }
            get radius() {return this._r;}
            get height() {return this._height;}

            set radius(value) {this._r = value;}
            set height(value) {this._height = value;}
        }
        
        //Variable declaration
        const myCylinder = new Cylinder();
        let radius = document.getElementById('radius').value;
        let height = document.getElementById('height').value;

        //Data check
        if (radius == '' || height == '') {
            throw 'ERROR! You MUST include a value to radius and height!';
        } else if (radius <= 0 || height <= 0) {
            throw "ERROR! You MUST include values that are higher than 0!";
        }

        //Adding the variables as attributes for object myCylinder
        radius = Number(radius);
        height = Number(height);
        myCylinder.radius = radius;
        myCylinder.height = height;

        //Displaying the content of myCylinder
        document.getElementById('object3').innerHTML = 
        `Volume of a Simple Cylinder:<br>\
        Radius: ${myCylinder.radius} cm<br>\
        Height: ${myCylinder.height} cm<br>\
        Volume: ${myCylinder.volume} cm³`
    }
    //Error catching
    catch(error) {
        alert(error);
        document.getElementById('radius').value = '';
        document.getElementById('height').value = '';
    }
}
