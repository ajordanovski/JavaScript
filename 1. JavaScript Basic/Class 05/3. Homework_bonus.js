let recipeName = prompt("name of the recipe");
let numIngredients = Number(prompt("how many ingredients do we need for the recipe"));

let div2 = document.getElementById("div2");

div.innerHTML += `<h1>${recipeName}</h1>`;

let array = [];
for (index = 0; index < numIngredients; index++) {
    let ingredientsName = prompt("name of the Ingredients");
    array.push(ingredientsName);
}

div2.innerHTML = (
    `
            <ul>
                ${array.map(element => {
                    return (
                        `<li>${element}</li>`
                    )
                }).join("")}
            </ul>
    `
)
