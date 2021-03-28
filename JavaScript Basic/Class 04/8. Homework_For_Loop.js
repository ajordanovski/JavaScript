let numberArray = [16, 22, 8, 9, 15, 19, 91, 30, 4, 64];

function maxAndMin (array) {
    let maxNumber =  array[0];
    let minNumber = array[0];

    for (index=0; index < array.length; index++) {
        if (array[index] > maxNumber) {
            maxNumber = array[index];
        }
     else if (array[index] < minNumber) {
        minNumber = array[index];
    }
    }

    let result = maxNumber + minNumber;

    return console.log(`Max Number is ${maxNumber}, Min Number is ${minNumber}, Sum of Max and Min is ${result}`);
}

maxAndMin(numberArray);