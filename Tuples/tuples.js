"use strict";
// const person1:PersonInfo=[] we have to add 3 elements mandatory otherswise it will give error
const person11 = ["suman", 24, true];
// const person12:PersonInfo=[25,"Lipsa",false] the order of element must be same otherwise give error
const person12 = ["Lipsa", 25, false];
const displayPersonInfo = (person) => {
    const [name, age, drivingLicence] = person;
    console.log(`Name:${name},Age:${age},Driving Liscence:${drivingLicence ? "Yes" : "no"}`);
};
// person11.push("coding"); it will give error because we declare it readonly
displayPersonInfo(person11);
displayPersonInfo(person12);
