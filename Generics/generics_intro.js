"use strict";
//Generics in Typescript allow you to create reusable components or functions that can work with multiple data types.
function logAndReturn(value) {
    return value;
}
const numberResult = logAndReturn(55);
const stringResult = logAndReturn("Suman");
const booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
//using generics we dont have to explicitely mention the multiple types it automatically convert to it.
//Homework
// function add<T>(a:T,b:T):T{
//   return a+b;
// }
// const addNumber=add<number>(5,10)
// const addString=add<string>("Suman","Sahu");
