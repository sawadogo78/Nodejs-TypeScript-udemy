var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button'); // not null, the exclamtion
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2; // number
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2; // string concatination
    }
    return +num1 + +num2; // convert it in number
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2); // put + to convert it to number
    var stringResult = add(num1, num2);
    console.log(result);
    console.log(stringResult);
});
