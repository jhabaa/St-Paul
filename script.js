const { get } = require("express/lib/response");

function toUs(){
    window.open("us.html");
}
function showdate(){
    var months = ["Janvier","Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    const date = new Date();
    document.getElementById("date").innerHTML = months[date.getMonth()] + " "+ date.getFullYear();
}