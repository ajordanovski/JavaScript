let array = [1, 2, 3, 4, 5];

function sum (array) {
    let result = (array[0] + array[1] + array[2] + array[3] + array[4]);
    console.log (result);
}

sum (array);


function validateNumber(array) {
    if (typeof (array[0]) === 'number' && typeof (array[1]) === 'number' && typeof (array[2]) === 'number' && typeof (array[3]) === 'number' && typeof (array[4]) === 'number') {
        let result = (array[0] + array[1] + array[2] + array[3] + array[4]);
        console.log (result);
    }
    else {
        console.log ('Not a Number');
    }
}

validateNumber(array);

console.log(typeof (array[0]));