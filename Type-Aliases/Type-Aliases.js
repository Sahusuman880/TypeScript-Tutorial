"use strict";
//Person1
const person5 = {
    name: "Suman",
    age: 24,
    isStudent: true,
    address: {
        city: "Balliguda",
        country: "India",
    }
};
//Person2
const person6 = {
    name: "Suman",
    age: 24,
    isStudent: true,
    address: {
        city: "Balliguda",
        country: "India",
    }
};
//Person3
const person7 = {
    name: "Suman",
    age: 24,
    isStudent: true,
    address: {
        city: "Balliguda",
        country: "India",
    }
};
const product1 = {
    name: "Lpatop",
    price: 1000,
    quantity: 5,
};
const calculatePrice = (product1) => {
    console.log(`the price is ${product1.price * product1.quantity}`);
};
calculatePrice(product1);
