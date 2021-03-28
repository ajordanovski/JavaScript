// <<<<<<<<<<<<<<< HOMEWORK PART 1 >>>>>>>>>>>>>>>

function parameterType (x){
    let type = x;
    return type;
}

let firstName = "Trpe"
let age = 55

console.log(`Object ${parameterType(firstName + " " + age)}`);
console.log(`Boolean ${parameterType(true)}`);
console.log(`Number ${parameterType(33)}`);
console.log(`String ${parameterType("Dog and Cat")}`);
console.log(`Undefined ${parameterType()}`);





// <<<<<<<<<<<<<<< HOMEWORK PART 2 >>>>>>>>>>>>>>>

// let insertHumanAge = Number(prompt("Insert Human Age"));

// function HumantoDog(insertHumanAge) {
//     return console.log(`${insertHumanAge * 7} Dogs Age`);
// }

// HumantoDog(insertHumanAge);

// let insertDogAge = Number(prompt("Insert Dog Age"));

// function DogtoHuman(insertDogAge) {
//     let dogCalculate = (insertDogAge / 7)
//     return console.log(dogCalculate + " Humans Age");
// }

// DogtoHuman(insertDogAge);





// <<<<<<<<<<<<<<< HOMEWORK PART 3 >>>>>>>>>>>>>>>

// let insertCash = Number(prompt("Insert cash on your account"));

// alert(`${insertCash} MKD is your account balance`);

// let withdrawCash = Number(prompt("Enter you withdraw amount"));

// function balance (insertCash, withdrawCash) {
//     return console.log(`${insertCash - withdrawCash} Your account balance`)
// }

// if (withdrawCash <= insertCash) {
//     console.log (`${withdrawCash} Withdrawing amount`);
//     balance (insertCash, withdrawCash);
// }
// else {
//     console.log(`Not enough money. Your balance is ${insertCash}`)
// }