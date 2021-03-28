// ## Title Generator
// * Create 3 inputs:
//   * Color
//   * FontSize
//   * Text
// * Create a button for generating titles
// * When the button is clicked generate a new h1 element with the color, font size and text from the inputs


let div = document.getElementById("div");
let inputColor = document.getElementById("color");
let inputFontSize = document.getElementById("fontSize");
let inputText = document.getElementById("text");
let button = document.getElementById("button");

button.addEventListener("click", function () {
    color = inputColor.value;
    fontSize = Number(inputFontSize.value);
    text = inputText.value;

    div.innerHTML =`<h1>${text}</h1>`;

    div.style.color = `${color}`;
    div.style.fontSize = `${fontSize}px`

    clearInputs();
});

function clearInputs() {
    inputColor.value = "";
    inputFontSize.value = "";
    inputText.value = "";
}