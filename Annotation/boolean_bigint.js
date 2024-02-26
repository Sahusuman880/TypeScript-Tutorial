"use strict";
let isname = true;
// isname="suman" //not valid
function isEven(num) {
    return num % 2 === 0;
}
let result1 = isEven(5);
if (result1) {
    console.log("Number is Even");
}
else {
    console.log("Number is Odd");
}
