// <<<<<<<<<<<<<<< HOMEWORK PART 2 >>>>>>>>>>>>>>>

let insertHumanAge = Number(prompt("Insert Human Age"));

function HumantoDog(insertHumanAge) {
    return console.log(`${insertHumanAge * 7} Dogs Age`);
}

HumantoDog(insertHumanAge);

let insertDogAge = Number(prompt("Insert Dog Age"));

function DogtoHuman(insertDogAge) {
    let dogCalculate = (insertDogAge / 7)
    return console.log(dogCalculate + " Humans Age");
}

DogtoHuman(insertDogAge);