// Make 3 functions:
// 1. Function that takes a number through a parameter and returns how many digits that number has
// 2. Function that takes a number through a parameter and returns if its even or odd
// 3. Function that takes a number through a parameter and returns if its positive or negative
// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. 
// It should show the results in the console. 


function numberlength(number) {
    return `The number ${number} has ${number.toString().length} digits`;
}

let resultNumberlength = numberlength(123456789);
console.log(resultNumberlength);


function evenOrOdd(number) {
    if (number % 2 === 0) {
        return `The number ${number} is even`
    }
    else {
        return `The number ${number} is odd`
    }
}

let resultevenOrOdd = evenOrOdd(501);
console.log(resultevenOrOdd)

function positiveOrNegative(number) {
    if (number >= 0) {
        return `The number ${number} is positive`;
    }
    else {
        return `The number ${number} is negative`;
    }
}

let resultPositiveOrNegative = positiveOrNegative(-1200);
console.log(resultPositiveOrNegative);

function allThreeFunctions(number) {
    let function1 = numberlength(number);
    let function2 = evenOrOdd(number);
    let function3 = positiveOrNegative(number);
    console.log(function1);
    console.log(function2);
    console.log(function3);
}

allThreeFunctions(67000);
