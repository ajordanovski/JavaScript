let userInput = prompt("Enter your birthday mm/dd/yyyy");

let stringFormatedDate = userInput.match(/(\d\d)(\d\d)(\d\d\d\d)/);

let date = new Date(stringFormatedDate[3], stringFormatedDate[1] - 1, stringFormatedDate[2]);

let dateDate = date.getDate();
let dateMonth = date.getMonth() + 1;
let dateFullYear = date.getFullYear();

let todayDate = new Date();

let todayDateDate = todayDate.getDate();
let todayDateMonth = todayDate.getMonth() + 1;
let todayDateFullYear = todayDate.getFullYear();


if (todayDateFullYear - dateFullYear > 18 && todayDateFullYear - dateFullYear <=120 && todayDateMonth - dateMonth == 0 && todayDateDate - dateDate == 0){
    console.log("SREKEN RODENDEN - POLNOLETEN")
} else if (todayDateFullYear - dateFullYear > 18 && todayDateFullYear - dateFullYear <=120){
    console.log("POLNOLETEN")
} else if (todayDateFullYear - dateFullYear < 18 && todayDateFullYear - dateFullYear >=0 && todayDateMonth - dateMonth == 0 && todayDateDate - dateDate == 0){
    console.log("SREKEN RODENDEN - MALOLETEN")
} else if (todayDateFullYear - dateFullYear < 18 && todayDateFullYear - dateFullYear >=0){
    console.log("MALOLETEN")
} else if (todayDateFullYear - dateFullYear == 18 && todayDateMonth - dateMonth == 0 && todayDateDate - dateDate == 0){
    console.log("SREKEN RODENDEN - POLNOLETEN")
} else if (todayDateFullYear - dateFullYear == 18 && todayDateMonth - dateMonth >= 0 && todayDateDate - dateDate > 0){
    console.log("POLNOLETEN")
} else if (todayDateFullYear - dateFullYear == 18 && todayDateMonth - dateMonth <= 0 && todayDateDate - dateDate < 0){
    console.log("MALOLETEN")
} else if (todayDateFullYear - dateFullYear < 0 || todayDateFullYear - dateFullYear > 120){
    console.log("VNESOVTE NEVALIDEN DATUM")
} else {
    alert("USLOVOT GO NEMA, IZVESTI ADMINISTRATOR")
}