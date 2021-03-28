// ## Exercise 2
// Create a button
// When the button is clicked, call the StarWars api for the first person. \
// Print the person name in an **h1** tag. \
// Print the person stats in a **table**:
// * Height
// * Weight
// * Eye color
// * Hair color

// **URL:** https://swapi.dev/api/people/1/
// **NOTE:** JQuery will autmatically parse this call (js will not).


//<<<<<--------------------jQuery Ajax-------------------->>>>>
$(document).ready(function () {

    function Print(element) {

        let h1 = $(`<h1>${element.name}</h1>`);
        let table = $(`
        <table border="3px">
        <tr>
            <td>Height</td>
            <td>Weight</td>
            <td>Eye color</td>
            <td>Hair color</td>
        </tr>
        
        <tr>
            <td>${element.height}</td>
            <td>${element.mass}</td>
            <td>${element.eye_color}</td>
            <td>${element.hair_color}</td>
        </tr>
        </table>`)

        $("body").append(h1);
        $("body").append(table);
    }


    $("#button").click(function () {

        $.ajax({
            type: "GET",
            url: "https://swapi.dev/api/people/1/",
            success: function (response) {
                Print(response);
            },
            error: function (error) {
                console.error(error);
            }
        })
    })
})



//<<<<<--------------------Fetch-------------------->>>>>
function Print(element) {

    let h1 = $(`<h1>${element.name}</h1>`);
    let table = $(`
    <table border="3px">
    <tr>
        <td>Height</td>
        <td>Weight</td>
        <td>Eye color</td>
        <td>Hair color</td>
    </tr>
    
    <tr>
        <td>${element.height}</td>
        <td>${element.mass}</td>
        <td>${element.eye_color}</td>
        <td>${element.hair_color}</td>
    </tr>
    </table>`)

    $("body").append(h1);
    $("body").append(table);
}


document.getElementById("button").addEventListener("click", function(){
let url = "https://swapi.dev/api/people/1/";
fetch(url)
.then(function(response){
    return response.json();
}).then(function(response){
    Print(response);
}).catch(function(error){
    console.error(error);
})
})