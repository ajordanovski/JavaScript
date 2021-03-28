let myParagraph1 = document.getElementsByClassName("paragraph")[0];
myParagraph1.innerText = "First Chaned Text";

let myParagraph2 = document.getElementsByClassName("paragraph")[1];
myParagraph2.innerText = "Second Chaned Text";

let divWithId = document.querySelector("#myTitle");
divWithId.innerText = "Changed Header with ID";

let lastDiv = document.getElementsByTagName("div")[2];
let lastDivH1 = lastDiv.firstElementChild;
let lastDivH3 = lastDiv.lastElementChild;

lastDivH1.innerText = "Changed last div H1"
lastDivH3.innerText = "Changed last div H3"