let firstName = ["Bob", "Jill", "John", "Neo"];
let lastName = ["Gregory", "Wurtz", "Smith", "Wein"];


// solution 1 "+="
function nameSurname (array1, array2) {
    let fullName = "";
    let No = 1;
    
    for (index=0; index < array1.length && array2.length; index++) {
        let concatanate = No + "." + array1[index] + " " + array2[index] + " ";
        fullName += concatanate;
        No++;
    }
    return fullName;
}

console.log(nameSurname(firstName, lastName));


// solution 2 ".push"

function nameSurname (array1, array2) {
    let fullName = [];
    let No = 1;
    
    for (index=0; index < array1.length && array2.length; index++) {
        fullName.push(`${No}. ${array1[index]} ${array2[index]}`)
        No++;
    }
    return fullName;
}

console.log(nameSurname(firstName, lastName));
