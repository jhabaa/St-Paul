const { get } = require("express/lib/response");

function toUs(){
    window.open("us.html");
}
function showdate(){
    var months = ["Janvier","Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    const date = new Date();
    document.getElementById("date").innerHTML = months[date.getMonth()] + " "+ date.getFullYear();
}
var showing = false;
function showMenu(){
    var menu = document.getElementById("menu");
    var icon = document.getElementById("menu_img")
    icon.animate([
        //keyframes
        {transform:'rotate(180deg)'}
    ],
        {//timing
        duration:500,
        iterations:1}
    );

    menu.classList.toggle("headButtons");
    //We can anime the buttons div too
    if(showing == false){
        menu.animate({
            opacity:[0, 1]
        },700);
        
        showing = true;
    }else{
        menu.animate({
            opacity:[1, 0]
        },500);
        showing = false;
        
    }
    
    
    
}