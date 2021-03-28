$(document).ready(function(){
    $("#inputText").css("width", "300px");
    $("#inputColor").css("width", "300px");

    $("#button").on("click",function(){
        if($("#inputColor").val() === "red"){
            $("button").after(`<h1>${$("#inputText").val()}</h1>`);
            $("h1").css("color", "red");
        } 
        else if ($("#inputColor").val() === "green"){
            $("button").after(`<h1>${$("#inputText").val()}</h1>`);
            $("h1").css("color", "green");
        }
        else if ($("#inputColor").val() === "blue"){
            $("button").after(`<h1>${$("#inputText").val()}</h1>`);
            $("h1").css("color", "blue");
        }
        else if ($("#inputColor").val() === "yellow"){
            $("button").after(`<h1>${$("#inputText").val()}</h1>`);
            $("h1").css("color", "yellow");
        } 
        else if ($("#inputColor").val() === "purple"){
            $("button").after(`<h1>${$("#inputText").val()}</h1>`);
            $("h1").css("color", "purple");
        }
        else if (($("#inputColor").val() !== "red") || ($("#inputColor").val() !== "green") || ($("#inputColor").val() !== "blue") || ($("#inputColor").val() !== "yellow") || ($("#inputColor").val() !== "purple") || ($("#inputColor").val() === "")){
            $("button").after("<h3>You pick invalid color or an empty text!</h3>");
            console.error("You pick invalid color or an empty text!")
        }
    })
});
