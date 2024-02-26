"use strict";
function calculateAvg(arr) {
    let resultset = arr.reduce((a, b) => {
        return a + b;
    });
    return resultset / arr.length;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(calculateAvg(arr));
