'use strict';

// const prompt = require('prompt-sync')({ sigint: true });

let myArray = [1, 1, 2, 3, 4, 5, 5, 5];

// Write Code here
const separateEvensOdds = arrayNums => {
    let evenNums = [],
        oddNums = [];

    arrayNums.forEach(num => {
        if (num % 2 == 0) evenNums.push(num);
        else oddNums.push(num);
    });

    console.log(evenNums);
    console.log(oddNums);

    return;
};

separateEvensOdds(myArray);
