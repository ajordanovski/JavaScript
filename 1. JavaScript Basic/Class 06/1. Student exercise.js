let myButton = document.getElementById("butt");

function greet (){
    alert(`Hello Angel`);
    console.log(`Hello Angel`);
};

myButton.addEventListener("click", greet, false);


//--------------------------------------------------------------------------------------------------------


// let myInput = Number(document.getElementById ("input").value);

// function onEnterPressed(event) {
//     console.log(event.target.value);

//     // if (event.keyCode == 13) {
//     //     alert(`${event.target.value}`)
//     // }
//     // else {
//     //     console.error(`${event.target.value}`);
//     // }
// }

// document.getElementById("input").addEventListener("keyup", onEnterPressed);


function onKeyPressed(event) {
    console.log(event.target.value);
}

document.getElementById("input").addEventListener("keypress", onKeyPressed);
document.getElementById("input").addEventListener("keydown", onKeyPressed);
document.getElementById("input").addEventListener("keyup", onKeyPressed);
document.getElementById("input").addEventListener("change", onKeyPressed);


// keypress - eventot se izvrsuva i koga go pritskame i koga go otpustame kopceto
// keydown - eventot se izvrsuva i koga go pritskame kopceto
// keyup - eventot se izvrsuva i koga go otpustame kopceto
// change - eventot se izvrsuva koga ke prestaneme so focusot, vo input text dokolku pocneme da vnesuvame text i so mouse stisneme na strana togas se izvrsuva eventot.

let triggerTesting = document.getElementById("butt2");

function setBG (event) {
    event.target.style.background = "green";
    console.log(`event now`);
}

function setBG1 (event) {
    event.target.style.background = "blue";
    console.log(`event now`);
}

triggerTesting.addEventListener("mouseover", setBG);
triggerTesting.addEventListener("mouseout", setBG);

// (dokolku postojat 2 elemneti parrent child so mouseover/out ke izvrsuva over i out posle sekoj t.e. ke ima poveke nastani)
// mouseover - triger za eventot da se izvrsi koga ke dojdeme so mausot na elementot
// mouseout - triger za eventot da izvrsi koga ke se trgneme so mausot na elementot

// triggerTesting.addEventListener("mouseenter", setBG1);
// triggerTesting.addEventListener("mouseleave", setBG1);

// (dokolku postojat 2 elemneti parrent child so mouseenter/leave ke se izvrsat 4 nastani od parent ke vleze vo child pa izlez od child i izlez od parrent)
// mouseenter - triger za eventot da se izvrsi koga ke dojdeme so mausot na elementot
// mouseleave - triger za eventot da izvrsi koga ke se trgneme so mausot na elementot