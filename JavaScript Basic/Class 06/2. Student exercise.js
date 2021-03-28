let paragraph = document.getElementById("paragraph1");
let myBtn = document.getElementById("buton1");

function css (element){
    element.style.color = "red";
    element.style.backgroundColor  = "yellow";
    element.style.fontSize = "large";
}

myBtn.addEventListener("click", function(){
    css (paragraph);
});