// ## List Generator
// * Create 3 inputs:
//   * Color
//   * FontSize
//   * Items
// * Create a button for generating unordered lists
// * When the button is clicked generate a new ul element with the color, font size and items from the inputs 
// > Items should be added separated by , in the input


let ul = document.getElementById("ul");
let inputColor = document.getElementById("color");
let inputFontSize = document.getElementById("fontSize");
let inputItems = document.getElementById("items");
let button = document.getElementById("button");

button.addEventListener("click", function () {
    color = inputColor.value;
    fontSize = Number(inputFontSize.value);
    items = inputItems.value;
    array =items.split(",");

    function addItems (array) {
        for( let i = 0; i < array.length; i++){
            ul.innerHTML +=`<li>${array[i]}</li>`;
        }
    }
    addItems(array);
    
    ul.style.color = `${color}`;
    ul.style.fontSize = `${fontSize}px`

    clearInputs();
});

function clearInputs() {
    inputColor.value = "";
    inputFontSize.value = "";
    inputItems.value = "";
}