const { get } = require("express/lib/response");

function toUs(){
    window.open("us.html");
}
function showdate(){
    const date = new Date();
    document.getElementById("date").innerHTML = date.getFullYear();
}