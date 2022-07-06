const charNames = ["Jeanne", "Goku", "Vegeta", "Beerus", "Arthur", "Freeza"];

function showContent() {
    for (let v of charNames) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(v));

        document.getElementById('array_list').appendChild(item);
    }
};

function hideContent() {
    document.getElementById('array_list').innerHTML = '';
};
