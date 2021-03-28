// 1. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.


function calculate () {
    
    let array = [];
    for (index=1; index <= 100; index++) {
        if ((index % 7 === 0) && (index % 3 === 0)){
            array.push(index);
        }
    }
    return array;
}

console.log(calculate());


// 2. Create a Javascript ATM machine. 
// The ATM should have the following functions:
// - make desposit (this function should add money to the users balance)
// - make withdrawal (this function should should withdraw money to the users balance)
// - get the balance (this function should display the current balance of the user)
// - exit (this function should close the window)
// create interactive menu using alerts

let startBalance = 10000;

function bankomat () {

let input = Number(prompt("1-For deposit, 2-For withdrawal, 3-For balance, 4-Exit"));

function deposit (startBalance) {
    let deposit = Number(prompt("deposit money"));
    startBalance += deposit;
    return startBalance;  
}

function withdrawal (startBalance) {
    let withdrawal = Number(prompt("withdrawal money"));
    startBalance = startBalance - withdrawal;
    return startBalance;
}

function balance (startBalance) {
    return startBalance;
}

function exit () {
    return "Exit";
}

if (input === 1){
    startbalance = deposit(startBalance);
    console.log(startbalance);
    bankomat();
}
else if (input === 2){
    startbalance = withdrawal(startBalance);
    console.log(startbalance)
    bankomat();
}
else if (input === 3){
    console.log (balance(startBalance));
    bankomat();
}
else if (input === 4){
    console.log (exit());
}

};

bankomat();