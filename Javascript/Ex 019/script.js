"use strict";

function createArray() {
    if (document.getElementById('list_array').innerHTML != '') {
        document.getElementById('list_array').innerHTML = '';
    };

    let content = document.getElementById('txt_array').value;
    let arr = content.split(',');
    
    for (let i in arr) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(arr[i]));
        document.getElementById('list_array').appendChild(item);
    };
};

function createNumArray() {
    if (document.getElementById('list_num_array').innerHTML != '') {
        document.getElementById('list_num_array').innerHTML = '';
    };

    let content = document.getElementById('num_array').value;
    let arr = content.split(',');

    for (let i of arr) {
        let item = document.createElement('li');

        if (i % 2 == 0) {
            item.appendChild(document.createTextNode(`${i} (PAIR)`));
        } else {
            item.appendChild(document.createTextNode(i));
        };

        document.getElementById('list_num_array').appendChild(item);
    };
};
