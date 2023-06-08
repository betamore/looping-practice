'use strict';

let myArray = [3, 9, 10, 2, 1, 901, 76, 90, 14, 1000];

// Write code here
const sumOfArr = arrNums => arrNums.reduce((augend, addend) => augend + addend);
const productOfArr = arrNums =>
    arrNums.reduce((accFactor, factor) => accFactor * factor);

console.log(sumOfArr(myArray));
console.log(productOfArr(myArray));
