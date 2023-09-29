const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!; // not null, the exclamtion

// defining array
const numResults: number[] = []; // this means an array full with number
const textResults: string[] = []; // an array full with string

function add(num1:number |string, num2:number|string) {
    if(typeof num1==='number' && typeof num2==='number'){
        return num1 + num2; // number
    } else if(typeof num1==='string' && typeof num2==='string'){
        return num1+ ' ' +num2; // string concatination
    }
    return +num1+ +num2;// convert it in number
}

function printResult(resultObject:{val:number, timestamp:Date}){
    console.log(resultObject.val);
}

buttonElement.addEventListener('click',()=>{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2); // put + to convert it to number
    numResults.push(result as number); // adding element to typescript array
    const stringResult = add(num1, num2);
    textResults.push(stringResult as string); //adding element to typescript array
    console.log(result);
    console.log(stringResult);
    printResult({val:+result, timestamp: new Date()});
    console.log(numResults, textResults);

})

