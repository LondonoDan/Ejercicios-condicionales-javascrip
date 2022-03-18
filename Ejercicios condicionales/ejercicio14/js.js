/*
Calcular la edad actual de una persona
*/
var edad;
var diaActual = prompt("Digita el día actual");
var mesActual = prompt("Digita el mes actual");
var añoActual = prompt ("Digita el año actual");
var mesNacimiento = prompt("Digita el mes de nacimiento");
var diaNacimiento = prompt ("Digita el día de tu nacimiento");
var añoNacimiento = prompt ("Digita tu año de nacimiento");
edad = añoActual - añoNacimiento; 

if (mesNacimiento > mesActual){
    edad = edad - 1;
    alert ("La edad del usuario es de: "+edad);
}
else if(diaNacimiento > diaActual){
    edad = edad -1;
    alert ("La edad del usuario es de: "+edad);
}
 else if (diaNacimiento == diaActual){
     alert("¡Feliz cumpleaños!, tu edad es de: "+ edad);
 }
 else if(mesNacimiento == mesActual){
    alert("¡Feliz cumpleaños!,tu edad es de: " +edad);
    }