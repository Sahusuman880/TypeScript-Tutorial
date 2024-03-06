"use strict";
const Student1 = {
    name: "Suman",
    age: 24,
    greet: (country) => `my name is ${Student1.name}, my age is ${Student1.age} and i am from ${country}`
};
const Student2 = {
    name: "Vinod",
    age: 29,
    greet: (country) => `my name is ${Student2.name}, my age is ${Student2.age} and i am from ${country}`
};
const introduction = (Student1) => {
    const { name, age } = Student1;
    console.log(`my name is ${name} and my age is ${age}`);
};
introduction(Student1);
console.log(Student1.greet("India"));
console.log(Student1.greet("Nepal"));
