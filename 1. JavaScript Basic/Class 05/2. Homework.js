let array = [5, 10, 15];
let div = document.getElementById("div");

function listElement (list, dom) {
    let result = 0;  
    dom.innerHTML += "<ul>"
    for (i = 0; i < list.length; i++) {
        dom.innerHTML += `<li> ${list[i]} </li>`;
        result += list[i];  
    }
    dom.innerHTML += "</ul>"
    dom.innerHTML += `<p>${result}</p>`
    dom.innerHTML += `<p>${"(" + list[0] + "+" + list[1] + "+" + list[2] + ")" + "=" +  result}</p>`
}

listElement(array, div);