"use strict";
//In javaScript
const person = {
    name: "Suman",
    age: 24,
    isStudent: true,
    address: {
        city: "Balliguda",
        country: "India",
    }
};
console.log(person.address.country);
person.address.city = "Baliguda";
console.log(person);
//In Typescript
const person1 = {
    name: "Suman",
    age: 24,
    isStudent: true,
    address: {
        city: "Balliguda",
        country: "India",
    }
};
console.log(person1);
//person.address.city=123; it will give error
