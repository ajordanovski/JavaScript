function concatanate(array) {
    let result = "";
    for (let index = 0; index < array.length; index++) {
        let item = array[index] + " ";
        result += item;
    }
    console.log(result);
};

let someArray = ["Hello", "there", "students", "of", "SEDC", "!"];

concatanate(someArray);