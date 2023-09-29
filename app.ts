const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!; // not null, the exclamtion

// defining array
const numResults: number[] = []; // this means an array full with number
const textResults: string[] = []; // an array full with string

// Type aliases and interfaces (this allow to optimize the code of types declaration)
// Aliases
type NumOrString = number |string;
type Result = {val:number, timestamp:Date};
//Interface (Not that you can uses interface or aliase to optimize element type declaration)
interface ResultObject  {
    val:number,
    timestamp:Date
}
function add(num1:NumOrString, num2:NumOrString) {
    if(typeof num1==='number' && typeof num2==='number'){
        return num1 + num2; // number
    } else if(typeof num1==='string' && typeof num2==='string'){
        return num1+ ' ' +num2; // string concatination
    }
    return +num1+ +num2;// convert it in number
}

function printResult(resultObject:ResultObject){ // You can replace ResultObject (interface) with Result (aliase)
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

