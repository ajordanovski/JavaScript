$(document).ready(function(){

    $("#btn").on("click",function(){
        $("button").after(`<h1>Hello there ${$("#name").val()}!</h1>`);
        $("h1").css("color", "green");
     });


});