// Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it:
// Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json


let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
fetch(url)
.then(function(response){
    return response.json();
}).then(function(response){

// All students with an average grade higher than 3
    let averageGradeOver3 = response.filter(user => user.averageGrade > 3);
    console.log(averageGradeOver3);

// All female student names with an average grade of 5
    let femaleAverageGradeOver5 = response
    .filter(user => user.gender === "Female")
    .filter(user => user.averageGrade === 5)
    .map(user => user.firstName)
    console.log(femaleAverageGradeOver5);

// All male student full names who live in Skopje and are over 18 years old
    let maleNameSkopjeOver18 = response
    .filter(user => user.gender === "Male")
    .filter(user => user.city === "Skopje")
    .filter(user => user.age > 18)
    .map((user) => `${user.firstName} ${user.lastName}`)
    console.log(maleNameSkopjeOver18);

// The average grades of all female students over the age of 24
    let avgFemaleGradeOverAge24 = response
    .filter(user => user.gender === "Female")
    .filter(user => user.age > 24)
    .map(user => user.averageGrade)

    let sumOfGrades = response
    .filter(user => user.gender === "Female")
    .filter(user => user.age > 24)
    .reduce((prev, next) => prev += next.averageGrade, 0);
    let result = sumOfGrades / avgFemaleGradeOverAge24.length;
    console.log(result);


// All male students with a name starting with B and average grade over 2
    let maleStartWithBgradeOver2 = response
    .filter(user => user.gender === "Male" && user.averageGrade > 2 && user.firstName.startsWith("B"));
    console.log(maleStartWithBgradeOver2);

}).catch(function(error){
    console.error(error);
})

