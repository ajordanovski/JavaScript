let inputFirstName = document.getElementById("input1");
let inputLastName = document.getElementById("input2");
let inputEmail = document.getElementById("input3");
let inputPassword = document.getElementById("input4");
let submit = document.getElementById("submit");
let result = document.getElementById("result");

function concatanate (inputFirstName, inputLastName, inputEmail, inputPassword) {
    let lokalresult = (inputFirstName.value + " " + inputLastName.value + " " + inputEmail.value + " " + inputPassword.value);
    return lokalresult;
}

submit.addEventListener("click", function(){
    result.innerText = concatanate(inputFirstName, inputLastName, inputEmail, inputPassword);
});