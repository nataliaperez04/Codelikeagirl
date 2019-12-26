var time= new Date();
var color;
var myElement;

if(time.getMinutes() == 55) {
    color = "rojo";
} else if (time.getHours() == 15) {
    color = "amarillo";
} else {
    color = "verde";
}

 myElement = document.getElementById("timeColor");
 myElement.style.backgroundColor = color;

 var userName = prompt("¿Como te llamas?");
 document.getElementById("userName").innerHTML = userName;
