"use strict";
const arrayNumber = [1, 2, 3, 4, 5, 6];
//Map method
const newArray = arrayNumber.map((element) => {
    console.log(element);
    return element * 2;
});
console.log(newArray);
//Filter Method
const newArray1 = arrayNumber.filter((ele) => {
    return ele > 2;
});
console.log(newArray1);
//Reduce Method
const newnum = arrayNumber.reduce((a, b) => {
    return a + b;
});
console.log(newnum);
