// ## Student signup
// * Create a form with first name, last name, birth year and academy
// * Create a button for signing up
// * The button should create a new Student object and add it in the array of students


function Student(firstName, lastName, birthYear, academy) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    
    this.getAge = function () {
        let currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    this.getInfo = function () {
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}`
    }
}

let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let birthYearInput = document.getElementById("birthYear");
let academyInput = document.getElementById("academy");
let signUpButton = document.getElementById("signUp");

let studens2021 =[];

signUpButton.addEventListener("click", function(){
    firstName = firstNameInput.value;
    lastName = lastNameInput.value;
    birthYear = birthYearInput.value;
    academy = academyInput.value;

    if (!firstName || !lastName || !birthYear || !academy) {
        console.log("Please fill all empty inputs");
    } else {
        let student = new Student(firstName, lastName, birthYear, academy);
        studens2021.push(student);
        console.log("Successfuly added person");
        let age = student.getAge();
        let info = student.getInfo();
        console.log(`${info} and is ${age} years old`);
    }
    console.log(studens2021);
})


