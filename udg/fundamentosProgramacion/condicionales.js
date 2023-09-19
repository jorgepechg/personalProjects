//CONDICIONALES

//declaramos los porcentajes de los descuentos
let cupon1 = 0.1;
let cupon2 = 0.2;

//declaramos los precios de las pizzas
let precioPizzaCebolla = 150;
let precioPizzaPimiento = 200;
let precioPizzaBrocoli = 250;

//preguntamos si el cliente tiene cupon
let cupon = prompt('Bienvenido a Pizza Veggie, ¿Tiene un cupon? (Responda: si/no):','');

//si el cliente tiene cupon preguntamos cual
if (cupon == "si"){
    cupon = prompt('Por favor introduzca su cupon (Responda: 10 o 20):','');
  } else {
    cupon = 0;
  }

//declaramos una variable para el descuento a aplicar
  let descuento;

//si el cliente tiene un cupon valido definimos el descuento
if (cupon == '10'){
    descuento = cupon1;
  } else if (cupon == '20'){
    descuento = cupon2;
  } else {
    descuento = 0;
  }

//preguntamos al cliente por la pizza que desea
let pizza = prompt('Por favor escoja su pizza (cebolla, pimiento o brocoli):','');

//declaramos una variable para el precio con descuento
let precioPizza;

//si escogio una pizza valida le aplicamos el descuento del cupon ingresado
if (pizza == 'cebolla'){
    precioPizza = precioPizzaCebolla - (precioPizzaCebolla * descuento);
  } else if (pizza == 'pimiento'){
    precioPizza = precioPizzaPimiento - (precioPizzaPimiento * descuento);
  } else if (pizza == 'brocoli'){
    precioPizza = precioPizzaBrocoli - (precioPizzaBrocoli * descuento);
  } else {
    alert('Por favor escoja una opcion valida');
  }

//escribimos el resumen del pedido del cliente
  document.write('El resumen de su pedido es: pizza de ' + pizza + ' con un descuento de  ' + cupon + ' por ciento. El total de su pedido es de ' + precioPizza + '.');