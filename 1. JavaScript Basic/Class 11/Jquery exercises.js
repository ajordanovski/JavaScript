// 1.Create input form which will contain info about book(Name,Author,Telephone,Date). After clicking on the add button the book will be inserted into unordered list.

$(document).ready(function(){
    $("#button").on("click",function(){
        let name = $("#name").val();
        let author = $("#author").val();
        let telephone = $("#telephone").val();
        let date = $("#date").val();
        
        
        $("div").append(`<ul>
                            <li>${name}</li>
                            <li>${author}</li>
                            <li>${telephone}</li>
                            <li>${date}</li>
                        </ul>`);

    });
});


// 2.Create table which will have info about cars(Licence plates,Model,Color). Every even row will have red color and every first and last td border will have background color.

$(document).ready(function(){
    $("tr:even").css("color", "red");
    $("td:nth-child(1), td:nth-child(3)").css("background-color", "gray");
});

// 3.Create Menu option which will have 3 options(Starting,Increased,Reduce), after clicking every one of them it will afect the font in the paragraph.

$(document).ready(function(){
    $("#startFont").on("click",function(){ 
        $("#lorem").css("font-size", "medium")
    })
    $("#bigFont").on("click",function(){ 
        $("#lorem").css("font-size", "xx-large")
    })
    $("#smallFont").on("click",function(){ 
        $("#lorem").css("font-size", "small")
    })
});

// 4.Create Navigation Menu with 3 options. Initially on loading the page the first will be showed. After clicking on another option the currentlly active content will be hiden and the selected one will be shown.

$(document).ready(function(){
    $("img:nth(0)").show();
    $("img:nth(1), img:nth(2)").hide();

    $("#citys").change("click", function(){
        if($("#citys").val() === "current"){
            $("img:nth(0)").show();
            $("img:nth(1), img:nth(2)").hide()
        } else if ($("#citys").val() === "archived"){
            $("img:nth(1)").show();
            $("img:nth(0), img:nth(2)").hide()
        }else if ($("#citys").val() === "upcoming"){
            $("img:nth(2)").show();
            $("img:nth(0), img:nth(1)").hide()
        }
    })
});

// 5.Use this link https://api.openaq.org/v1/cities to make ajax call with jQuery. The returned data need to be shown in unordered list.

