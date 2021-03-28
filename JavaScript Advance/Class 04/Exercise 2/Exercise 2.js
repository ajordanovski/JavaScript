// 1. First arrow function will accept two parameters, one for element and one for color. 
// The function should change the given element text color with the color given from the 
// second color parameter. 
// If no parameter is passed for color, the default value is **black**.


let pElement = document.getElementById("pElement");

let colorChange = (element, color) => {
    if (color !== "") {
        element.style.color = `${color}`;
    }
    else {
        element.style.color = "black"
    }
}

colorChange(pElement, "red");
// colorChange(pElement);



// 2. Second arrow function will accept two parameters, one for element and one for textSize. 
// The function should change the given element text size to the number given from the second
//  textSize parameter. 
// If no parameter is passed for textSize, the default value is 24.


let pElement2 = document.getElementById("pElement2");

let fontSizeChange = (element, fontSize) => {
    if (fontSize !== "") {
        element.style.fontSize = `${fontSize}px`
    }
    else {
        element.style.fontSize = "24px"
    }
}

fontSizeChange(pElement2, 30);
// fontSizeChange(pElement);

// Create an HTML document with two inputs, a button and an h1 header with some text. 
// The first input should be for text size and the second for color.
//  When the button is clicked the h1 header should change according to the input values 
//  ( change size as the first input value and color as the second input value ).
//  Use the functions that we declared earlier and use arrow function for the event 
//  listener of the button. 


let button = document.getElementById("button");
let input1 = document.getElementById("color");
let input2 = document.getElementById("fontSize");
let h1 = document.getElementById("h1Element")

button.addEventListener("click", () => {
    let input1value = input1.value
    let input2value = input2.value

    colorChange(h1, input1value);
    fontSizeChange(h1, input2value);
})