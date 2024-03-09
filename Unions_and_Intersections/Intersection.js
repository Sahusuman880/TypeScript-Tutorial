"use strict";
const employee1 = {
    name: "Suman",
    age: 24,
    emp_id: 55,
    dept: 'IT'
};
const User1 = {
    name: "Suman"
};
const Location1 = {
    address: "Baliguda"
};
const createUserProfile = (user, location) => {
    return {
        ...user, ...location
    };
};
const myCompleteInfor = createUserProfile(User1, Location1);
console.log(myCompleteInfor);
