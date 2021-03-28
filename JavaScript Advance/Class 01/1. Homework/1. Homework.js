// ## Student constructor function
// * Create a constructor function for Student objects with:
//   * Properties:
//     * firstName
//     * lastName
//     * birthYear
//     * academy 
//     * grades - array of numbers
//   * Methods:
//     * getAge() - returns age of student
//     * getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
//     * getGradesAverage() - returns the average of the student grades
// * Create an array with 3 students


function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;
    
    this.getAge = function () {
        let currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    this.getInfo = function () {
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}`
    }

    this.getGradesAverage = function () {
        let array = this.grades;
        let result = 0
        for(let i=0; i<array.length; i++) {
            result += array[i];
        }
        return result / array.length;
    }
}

let gradesStudent1 = [6, 8, 9, 10, 7, 6];
let gradesStudent2 = [10, 10, 9, 8, 10, 9];
let gradesStudent3 = [9, 7, 8, 6, 9, 6];


let student1 = new Student("Angel", "Jordanovski", 1988, "Web Development", gradesStudent1);
let student2 = new Student("Petko", "Petkovski", 1995, "Data Science", gradesStudent2);
let student3 = new Student("Speedy", "Gonzales", 1997, "Design", gradesStudent3);

// let allThreeStudents = [student1, student2, student3];
let allThreeStudents = [];

allThreeStudents.push(student1);
allThreeStudents.push(student2);
allThreeStudents.push(student3);

console.log(allThreeStudents);
