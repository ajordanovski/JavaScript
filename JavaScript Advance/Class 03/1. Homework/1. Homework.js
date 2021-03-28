// ## Exercise 1
// Create a button
// When the button is clicked, get the data from a given url with an AJAX call. \
// Print the name of the academy in an **h1** tag. \
// Print all student names in an **unordered list**. \
// **URL:** https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json \
// **NOTE:** You need to parse this data before using it.


//<<<<<--------------------Plane JavaScript Ajax-------------------->>>>>
function printH1tag(element) {
    let h1 = document.createElement("h1");
    h1.innerText = `${element.academy}`;
    document.body.appendChild(h1);
}

function printStudents(element) {
    let ul = document.createElement("ul");
    for (let i = 0; i < element.students.length; i++) {
        ul.innerHTML += `<li>${element.students[i]}</li>`;
    }
    document.body.appendChild(ul);
}


document.getElementById("button").addEventListener("click", function () {

    $.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",
        success: function (response) {
            let responseObject = JSON.parse(response);
            printH1tag(responseObject);
            printStudents(responseObject);
        },
        error: function (error) {
            console.error(error);
        }
    })
})


//<<<<<--------------------jQuery Ajax-------------------->>>>>
$(document).ready(function () {

    function printH1jQuery(parameter) {
        let h1Jquery = $(`<h1>${parameter.academy}</h1>`);
        $("body").append(h1Jquery);
    }

    function printStudentsjQuery(parameter) {
        let ulJquery = $(`<ul></ul>`)
        for (i = 0; i < parameter.students.length; i++) {
            ulJquery.append(`<li>${parameter.students[i]}</li>`);
        }
        $("body").append(ulJquery);
    }

    $("#button").click(function () {

        $.ajax({
            type: "GET",
            url: "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",
            success: function (response) {
                let responseObject = JSON.parse(response);
                printH1jQuery(responseObject);
                printStudentsjQuery(responseObject);
            },
            error: function (error) {
                console.error(error);
            }
        })
    })
});


//<<<<<--------------------Fetch-------------------->>>>>
document.getElementById("button").addEventListener("click", function () {

    let url = `https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json`;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (response) {
            printH1tag(response);
            printStudents(response);
        }).catch(function (error) {
            console.error(error);
        })
});