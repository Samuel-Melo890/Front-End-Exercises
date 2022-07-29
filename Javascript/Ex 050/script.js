"use strict";

//Async function to get the pokemon list and return a specific pokemon object
const pokemon = async (id) => {
    try {
        //Getting list of pokemon
        const pokeList = await fetch(`./pokemon.json`).then(value => value.json()).catch(error => console.error(error));

        //Getting current pokemon
        let {name, type} = '';
        for (let i in pokeList) {
            if (id === pokeList[i]['id']) {
                ({name, type} = pokeList[i]);
            }
        }

        //Returning object with display values
        return {
            pokeId: id,
            english: name.english,
            japanese: name.japanese,
            types: type
        };
    }
    catch(error) {
        console.error(error);
    }
};

//Closure to return an object to display the content of a pokemon
const showPoke = (() => {
    let display = $('#pokemon');
    let id = 1;

    return {
        poke: function () {
            pokemon(id)
            .then(value => {
                display.html(`<br><b>Pokemon ID:</b> ${value.pokeId}<br>\
                <b>Pokemon English Name:</b> ${value.english}<br>\
                <b>Pokemon Japanese Name:</b> ${value.japanese}<br>\
                <b>Pokemon Type:</b> ${value.types}`);
            })
            .catch(error => console.error(error));
        },
        nextPoke: function () {
            id = ((id + 1) > 809) ? 1:(id + 1);
            this.poke();
        },
        previousPoke: function () {
            id = ((id - 1) < 1) ? 809:(id - 1);
            this.poke();
        }
    }
})();

//Finally displaying content
//First pokemon
showPoke.poke();

//Functions to go next and go back at a pokemon on the list

let time;
const back = (stop=false) => {
    time = setInterval(() => showPoke.previousPoke(), 100);
};
const next = (stop=false) => {
    time = setInterval(() => showPoke.nextPoke(), 100);
};
const stop = () => clearInterval(time);
