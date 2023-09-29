"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button'); // not null, the exclamtion
// defining array
// const numResults: number[] = []; // this means an array full with number
const numResults = []; // generics
const textResults = []; // an array full with string
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2; // number
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2; // string concatination
    }
    return +num1 + +num2; // convert it in number
}
function printResult(resultObject) {
    console.log(resultObject.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2); // put + to convert it to number
    numResults.push(result); // adding element to typescript array
    const stringResult = add(num1, num2);
    textResults.push(stringResult); //adding element to typescript array
    console.log(result);
    console.log(stringResult);
    printResult({ val: +result, timestamp: new Date() });
    console.log(numResults, textResults);
});
// generic 
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise.then(result => {
    console.log(result.split('w'));
});
