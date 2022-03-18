/* 12.	 Realice una factura de venta, ingrese el valor de 3 productos y calcule lo siguiente:
si paga en efectivo paga el valor total.
si paga con cupón realice un 3% de descuento
si paga a crédito aumente el 5% al total. */

var prod1 = prompt('Ingrese el valor del producto 1: $ ');
var prod2 = prompt('Ingrese el valor del producto 2: $ ');
var prod3 = prompt('Ingrese el valor del producto 3: $ ');
var mtdp = prompt('Ingrese el su metodo de pago:  1. Efectivo, 2. Cupón, 3. Crédito:  ');
var total,desc;
if(mtdp == 1){
  total = parseInt(prod1) + parseInt(prod2) + parseInt(prod3);
  alert('El valor a pagar por su factura es: ' + total);
}else if (mtdp == 2){
    ttl = parseInt(prod1) + parseInt(prod2) + parseInt(prod3);
    desc = total * 0.3;
    total = total - desc;
    alert('El valor a pagar por su factura es: $' + ttl + ' y tiene un descuento de $' + desc);
}else if(mtdp == 3){
    total = parseInt(prod1) + parseInt(prod2) + parseInt(prod3);
    desc = total * 0.5;
    total = total + desc;
    alert('El valor a pagar por su factura es: $' + total + ' y tiene un aumento de $' + desc);
}else{
    alert('El número ingresado no corresponde a un metodo de pago válido');
}



