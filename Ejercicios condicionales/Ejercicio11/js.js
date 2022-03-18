/*
Se necesita clasificar la etapa de una persona solo pidiéndole como dato su edad. 
(Si la edad es menor de 18 es adolecente), (si la edad está en el rango de 18 a 28 es adulto adolecente),
 (si la edad está entre 29 a 49 es adulto), (si la edad está entre 50 en adelante es adulto mayor). 
Mostrar en pantalla la etapa de la persona.
*/
var edad = prompt("Ingrese su edad");

if (edad <18){
    alert("Usted es adolecente");
}
else if (edad >=18 && edad <=28){
    alert("Usted es adulto adolecente");
}
else if ( edad >=29 && edad <=49){
    alert("Usted es adulto");
}
else {
    alert("Usted es adulto mayor");
}