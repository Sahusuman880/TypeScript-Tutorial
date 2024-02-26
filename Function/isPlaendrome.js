"use strict";
function isPalendrome(text) {
    let i = 0;
    let j = text.length - 1;
    let count = 0;
    while (i < j) {
        if (text[i] === text[j]) {
            count++;
        }
        i++;
        j--;
    }
    if (count === Math.floor(text.length / 2)) {
        return true;
    }
    else {
        return false;
    }
}
let resultof = isPalendrome("SumuS");
let str = (resultof ? "Palendrome " : "Not a Palendrome");
console.log(str);
