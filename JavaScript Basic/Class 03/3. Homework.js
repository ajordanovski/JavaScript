// <<<<<<<<<<<<<<< HOMEWORK PART 3 >>>>>>>>>>>>>>>

let insertCash = Number(prompt("Insert cash on your account"));

alert(`${insertCash} MKD is your account balance`);

let withdrawCash = Number(prompt("Enter you withdraw amount"));

function balance (insertCash, withdrawCash) {
    return console.log(`${insertCash - withdrawCash} Your account balance`)
}

if (withdrawCash <= insertCash) {
    console.log (`${withdrawCash} Withdrawing amount`);
    balance (insertCash, withdrawCash);
}
else {
    console.log(`Not enough money. Your balance is ${insertCash}`)
}