"use strict";

// GETTING ELEMENTS FOR QUANTITY, MINUS AND PLUS
export const MINUS1 = document.getElementById("minus-1");
export const QUANTITY1 = document.getElementById("quantity-1");
export const PLUS1 = document.getElementById("plus-1");

export const MINUS2 = document.getElementById("minus-2");
export const QUANTITY2 = document.getElementById("quantity-2");
export const PLUS2 = document.getElementById("plus-2");

// GETTING PRODUCT'S PRICES
export const PRICE1 = 
document.querySelectorAll('p.productPrice strong')[0].textContent.replace('$', '').replace(/.00/, '');
export const PRICE2 = 
document.querySelectorAll('p.productPrice strong')[1].textContent.replace('$', '').replace(/.00/, '');

// GETTING TOTAL PRICE
export const TOTAL_PRICE = document.getElementById("totalPrice");

// GETTING FORM
export const FORM = document.getElementById('userForm');
