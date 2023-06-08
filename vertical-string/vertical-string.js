let myWord = 'Pneumonoultramicroscopicsilicovolcanoconiosis';

// Write your code here

const verticallyPrintString = str =>
    str.split('').forEach(letter => console.log(letter));

verticallyPrintString(myWord);
