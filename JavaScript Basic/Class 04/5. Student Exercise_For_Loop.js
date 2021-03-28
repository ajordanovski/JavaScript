function oddEven(array, type){
    let result = [];
    if(type === "even"){
        for (let index = 0; index < array.length; index++) {
           if(array[index] % 2 === 0){
               result.push(array[index]);
           }
       } 
       return result;
    } else if(type === "odd"){
        for (let index = 0; index < array.length; index++) {
            if(array[index] % 2 !== 0){
                result.push(array[index]);
            }
        } 
        return result;
    } else {
        console.log("Please enter odd or even");
        return null;
    }
}

let someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = console.log (oddEven(someArray, "even"));
let odd = console.log (oddEven(someArray, "odd"));