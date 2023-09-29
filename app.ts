const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!; // not null, the exclamtion

function add(num1:number |string, num2:number|string) {
    if(typeof num1==='number' && typeof num2==='number'){
        return num1 + num2; // number
    } else if(typeof num1==='string' && typeof num2==='string'){
        return num1+ ' ' +num2; // string concatination
    }
    return +num1+ +num2;// convert it in number
}

buttonElement.addEventListener('click',()=>{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2); // put + to convert it to number
    const stringResult = add(num1, num2);
    console.log(result);
    console.log(stringResult);

})

