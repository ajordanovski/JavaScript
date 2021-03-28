let row = document.getElementById('row');
let col = document.getElementById('col');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(event){
    event.preventDefault();

    let rowValue = row.value;
    let colValue = col.value;
    let table = document.createElement('table');

    for (let j = 1; j <= rowValue; j++){

        let tr = document.createElement('tr'); 

        for (let i = 1; i <= colValue; i++){
        
        let td = document.createElement('td');
    
        let text1 = document.createTextNode('Row ' + j + 'Col ' + i);

        td.appendChild(text1);
        tr.appendChild(td);
    
        table.appendChild(tr);

        table.style.border = "1px solid black";
        td.style.border = "1px solid black";

        }
    }

    document.body.appendChild(table);
    row.focus();
    row.value = "";
    col.value = "";

})