let userInput = prompt("input number");

let convertedNumber = parseInt(userInput);

let array = [4, 5, 8, 9, 42, 4, 44, 9, 9, 5, 24, 4, 9];

let array2 = [4, 5, 8, 9, 5, 24, 4, 9];

let array3 = [4, 5, 8, 9, 42, 4, 44, 9, 9, 5, 24, 4, 9, 9, 55, 9, 16, 9, 4];

function findNumber (number, array) {
    let result = 0;
    for (let index = 0; index < array.length; index++) {
        if (number === array[index]) {
            result++;
        }
    }
    return result;
}

let result1 = console.log (`There is ${findNumber(convertedNumber, array)} occurrences of number ${convertedNumber} in the array.`);

let result2 = console.log (`There is ${findNumber(convertedNumber, array2)} occurrences of number ${convertedNumber} in the array.`);

let result3 = console.log (`There is ${findNumber(convertedNumber, array3)} occurrences of number ${convertedNumber} in the array.`);

let result4 = findNumber(convertedNumber, array);
let result5 = findNumber(convertedNumber, array2);
let result6 = findNumber(convertedNumber, array3);

console.log (result4 + result5 + result6);