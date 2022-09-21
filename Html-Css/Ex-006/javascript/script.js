"use strict";

import * as Var from "./variables.js"; 

// PRODUCT QUANTITIES
let q1 = 0, q2 = 0;

// TOTAL PRICE
let total = 0;

// FIRST PRODUCT
Var.MINUS1.addEventListener('click', () => {
    if (!(Var.QUANTITY1.textContent === "0")) {
        q1 = Number(Var.QUANTITY1.textContent) - 1;
        Var.QUANTITY1.textContent = q1;

        displayTotal();
    }
});

Var.PLUS1.addEventListener('click', () => {
    q1 = Number(Var.QUANTITY1.textContent) + 1;
    Var.QUANTITY1.textContent = q1;

    displayTotal();
});

// SECOND PRODUCT
Var.MINUS2.addEventListener('click', () => {
    if (!(Var.QUANTITY2.textContent === "0")) {
        q2 = Number(Var.QUANTITY2.textContent) - 1;
        Var.QUANTITY2.textContent = q2;

        displayTotal();
    }
});

Var.PLUS2.addEventListener('click', () => {
    q2 = Number(Var.QUANTITY2.textContent) + 1;
    Var.QUANTITY2.textContent = q2;

    displayTotal();
});

// FUNCTION TO DISPLAY THE TOTAL VALUE OF THE PURCHASE
function displayTotal() {
    total = Number(Var.PRICE1) * q1 + Number(Var.PRICE2) * q2;
    total = total.toLocaleString('en-US', {style: 'currency', currency: 'USD'});

    Var.TOTAL_PRICE.textContent = total;
}

// SUBMIT ACTION
Var.FORM.addEventListener('submit', () => alert(`Submit Sucessfull!!!`));
