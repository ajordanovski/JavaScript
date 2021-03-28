// ## Exercise 1
// Create a Person constructor function that has:
// * firstName
// * lastName
// * age
// * getFullName - method
// Create a Student constructor function that inherits from Person and has:
// * academyName
// * studentId
// * study - method that writes in the console: The student firstName is studying in the academyName
// Create two Student objects

// ## Exercise 2
// Create a method on the Student prototype that accepts a Student of any academy and returns the academy that that student is in.
// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.
// #### DesignStudent
// * isStudentOfTheMonth - boolean
// * attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!
// #### CodeStudent
// * hasIndividualProject - boolean
// * hasGroupProject - boolean
// * doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project
// #### NetworkStudent
// * academyPart - number
// * attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!
// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students Check all students with the Student method for checking students academy

function Person(firstName, lastName, age) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.getFullName = function () {
            console.log(`Person full Name is ${this.firstName} ${this.lastName}`)
        }
}

function Student(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age)),
        this.academyName = academyName,
        this.studentId = studentId,
        this.study = function () {
            console.log(`The student ${this.firstName} is studying in the ${this.academyName}`)
        }
    this.returnAcademy = function () {
        console.log(this.academyName)
    }
}

// ## Exercise 1
let student1 = new Student("Angel", "Jordanovski", 33, "SEDC Academy", 9);
let student2 = new Student("Itar", "Pejo", 25, "SEDC Academy", 5);
console.log(student1);
console.log(student2);
student1.getFullName();
student2.study();

// ## Exercise 2
Person.prototype.checkAcademy = function() {
    console.log(this.academyName)
}

function DesignStudent(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId)),
    this.isStudentOfTheMonth = isStudentOfTheMonth,
    this.attendAdobeExam = function () {
        console.log(`The student ${firstName} is doing an adobe exam!`)
    }
}

function NetworkStudent(firstName, lastName, age, academyName, studentId, academyPart) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId)),
    this.academyPart = academyPart,
    this.attendCiscoExam = function () {
        console.log(`The student ${firstName} is doing cisco exam!`)
    }
}

function CodeStudent(firstName, lastName, age, academyName, studentId, projectType) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId)),
    this.projectType = projectType,
    this.hasIndividualProject = projectType === "individual",
    this.hasGroupProject = projectType === "group",
    this.doProject = function () {
        if(this.projectType === "individual") {
            console.log(`The ${firstName} is working on the project of that type ${this.projectType}`)
        };
        if(this.projectType === "group") {
            console.log(`The ${firstName} is working on the project of that type ${this.projectType}`)
        };
    }
}

let designStu = new DesignStudent ("Pablo", "Picaso", 26, "SEDC Design Academy", 5, true);
console.log(designStu);
let networkStu = new NetworkStudent("Teknuvalo", "Lan", 45, "SEDC Network Academy", 73, 6);
console.log(networkStu);
let codeStu = new CodeStudent("Elliot", "Alderson", 32, "SEDC Web Academy", 3, "group");
console.log(codeStu);
codeStu.doProject();

designStu.returnAcademy();
designStu.checkAcademy();
networkStu.returnAcademy();
networkStu.checkAcademy();
codeStu.returnAcademy();
codeStu.checkAcademy();