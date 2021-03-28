// # Exercises
// ## Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be:
// Academy
// * Name - string
// * Students - array of Students
// * Subjects - array of Subjects
// * Start - Date when it starts
// * End - Date when it ends
// * NumberOfClasses - number of subjects * 10, not settable
// * PrintStudents - method that prints all students in console
// * PrintSubjects - method that prints all subjects in console
// Subject
// * Title - string
// * NumberOfClasses - default 10, not settable
// * isElective - boolean
// * Academy - Academy object
// * Students - array of Students
// * OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. 
// The number can't be smaller than 3.
// Student
// * FirstName - string
// * LastName - string
// * Age - number
// * CompletedSubjects - emptyArray as default, not settable
// * Academy - null as default, not settable 
// * CurrentSubject - null as default, not settable
// * StartAcademy - accepts Academy object that it sets to the Academy property of the student
// * StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

// ## Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.
// * StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
// * StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject

function Academy(name, students, subjects, start, end) {
    this.name = name,
    this.students = students,
    this.subjects = subjects,
    this.start = new Date(start),
    this.end = new Date(end),
    this.numberOfClasses = this.subjects.length * 10,
    this.printStudents = function () {
        this.students.forEach(student => console.log(student))
    },
    this.printSubjects = function() {
        this.subjects.forEach(subject => console.log(subject))
    }
}

function Subject(title, isElective, academy, students) {
    this.title = title,
    this.numberOfClasses = 10,
    this.isElective = isElective,
    this.academy = academy,
    this.student = students,
    this.overrideClasses = function(number) {
        if(number >= 3) {
            this.numberOfClasses = number
        }
        else {
            console.log("the number must be greater or equal of number 3")
        }
    }
}

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function(studentAcademy) {
        this.academy = studentAcademy;
        studentAcademy.students.push(`${this.firstName} ${this.lastName}`)
    }
    this.startSubject = function(studentSubject) {
        if(this.academy === null) {
            conosle.log("There is no academy")
        }
        if(this.academy !== null) {
            this.currentSubject = studentSubject
        }
    }
}

// * StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

// let angel = new Student("Angel", "Jordanovski", 33);
// let javaScript = new Subject("JavaScript", false, sedc, angel);
// let sedc = new Academy("web development", angel, javaScript, "01/11/2020", "15/10/2021");