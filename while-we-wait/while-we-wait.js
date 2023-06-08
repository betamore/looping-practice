'use strict';

// prettier-ignore
let myArray = [ "wait", "wait", "wait","wait", "wait", "wait","wait", "wait", "wait","wait", "wait", "wait", "STOP","wait", "wait", "wait","wait", "wait", "wait","wait", "wait", "wait","wait", "wait", "wait" ]

// Write code here
const doneWaiting = arrStrings =>
    arrStrings.indexOf(arrStrings.filter(word => word !== 'wait').join());

console.log(doneWaiting(myArray));
