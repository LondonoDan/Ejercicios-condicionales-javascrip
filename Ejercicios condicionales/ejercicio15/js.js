/*
calcular cuanto se debe pagar de costos de hospitalización, según los datos proporcionado
en la tabla, mostrar en pantalla
1. días de hospitalicación del paciente.
2. valor día según su edad.
3.valor del recargo y total a pagar.
*/

var edad = prompt("Ingrese la edad del usuario");
var dHosp = prompt("Ingrese los días que estuvo hospitalizado");
var vpagar;
var vpagRecargo;
var recargo;


if (edad >=0 && edad <=10 && dHosp <=1){
    vpagar = dHosp * 20000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=0 && edad <=10 && dHosp >=2 && dHosp <=4){
    vpagar = dHosp * 30000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=0 && edad <=10 && dHosp >=5 && dHosp <=7){
    vpagar = dHosp * 25000;
    recargo = vpagar * 0.5;
    vpagRecargo = vpagar + recargo;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor del recargo del 5% es de $:"+recargo);
    alert("El valor a pagar con recargos del 5% es de $: "+vpagRecargo);
}
else if (edad >=0 && edad <=10 && dHosp >=8){
    vpagar = dHosp * 15000;
    recargo = vpagar * 0.10;
    vpagRecargo = vpagar + recargo;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor del recargo del 10% es de $:" +recargo);
    alert("El valor a pagar con recargos del 10% es de $: "+vpagRecargo);
}
else if (edad >=11 && edad <=17 && dHosp <=1){
    vpagar = dHosp * 20000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=11 && edad <=17 && dHosp >=2 && dHosp <=4){
    vpagar = dHosp * 30000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=11 && edad <=17 && dHosp >=5 && dHosp <=7){
    vpagar = dHosp * 25000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=11 && edad <=17 && dHosp >=8){
    vpagar = dHosp * 15000;
    recargo = vpagar * 0.10;
    vpagRecargo = vpagar + recargo;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor del recargo del 10% es de $:");
    alert("El valor a pagar con recargos del 10% es de $: "+vpagRecargo);
}
else if (edad >=18 && edad <=49 && dHosp <=1){
    vpagar = dHosp * 20000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=18 && edad <=49 && dHosp >=2 && dHosp <=4){
    vpagar = dHosp * 30000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=18 && edad <=49 && dHosp >=5 && dHosp <=7){
    vpagar = dHosp * 25000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=18 && edad <=49 && dHosp >=8){
    vpagar = dHosp * 15000;
    recargo = vpagar * 0.15;
    vpagRecargo = vpagar + recargo;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor del recargo del 15% es de $:" +recargo);
    alert("El valor a pagar con recargos del 15% es de $: "+vpagRecargo);
}

else if (edad >=50 && dHosp <=1){
    vpagar = dHosp * 20000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargo es de $: "+vpagar); 
}
else if (edad >=50 && dHosp >= 2 && dHosp <=4){
    vpagar = dHosp * 30000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargo es de $: "+vpagar); 
}
else if(edad >=50 && dHosp >= 5 && dHosp <=7){
    vpagar = dHosp * 25000;
    recargo = vpagar * 0.15;
    vpagRecargo = vpagRecargo + vpagar;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("Valor del recargo del 15% es de $: "+recargo);
    alert("El valor a pagar con recargo del 15% es de $: "+vpagRecargo); 
}
else if (edad >=50 && dHosp >=8){
    vpagar = dHosp * 15000;
    recargo = vpagar * 0.20;
    vpagRecargo = vpagRecargo + vpagar;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor del recargo del 20% es de $: "+recargo);
    alert("El valor a pagar con recargo del 20% es de $: "+vpagRecargo); 
}
else {
    alert("Reconsidere la opción");
}

