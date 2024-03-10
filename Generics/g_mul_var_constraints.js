"use strict";
// When we user generics and non generic type together then while calling the function we need to define the type in a manner but with non generics we dont
function add1(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const result11 = add1(5, "Suman");
const result12 = add1("Suman", 5);
