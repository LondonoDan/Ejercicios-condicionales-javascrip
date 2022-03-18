/*
Se pide ingresar 3 notas y calcular el promedio de un alumno, mostrar el nivel del alumnos según su promedio: 
* 00 – 10 = Malo.
* 11 – 13 = Regular.
* 14 – 16 = Bueno.
* 17 – 20 = Muy bueno.
*/
var nota1 = prompt ("Ingrese la primer nota");
var nota2 = prompt ("Ingrese la segunda nota");
var nota3 = prompt ("Ingrese la tercer nota");
var promedio = parseInt(nota1) + parseInt(nota2) + parseInt(nota3)/3;

if(promedio >=0 && promedio <10){
    alert("El promedio del estudiante es Malo:");
}
else if(promedio >=11 && promedio <=13){
alert("El promerdio del alumno es Regular");
}
else if (promedio >=14 && promedio <=16){
    alert("El promerdio del estudiante es bueno");
}
else {
    alert("El promedio del estudiante es Muy bueno");
}

