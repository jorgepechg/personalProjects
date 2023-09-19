//CALCULADORA BASICA

//variables a usar
let cantidad1;
let cantidad2;
let resultado; 
let operacion;

//se crean funciones por cada operacion
function suma(c1, c2){
    resultado = cantidad1 + cantidad2;
    return resultado;
}
function resta(c1, c2){
    resultado = cantidad1 - cantidad2;
    return resultado;
}
function multiplicacion(c1, c2){
    resultado = cantidad1 * cantidad2;
    return resultado;
}
function division(c1, c2){
    resultado = cantidad1 / cantidad2;
    return resultado;
}
//pedimos al usuario las cantidades y la operacion a realizar
cantidad1 = parseFloat(prompt('Ingrese el número:',''));
cantidad2 = parseFloat(prompt('Ingrese el segundo número:',''));
operacion = prompt('Por favor escriba el número de la operación a realizar 1.-suma, 2.-resta, 3.-multiplicación, 4.-división):','');

//usumos condionales para llamar a la función de la operación escogida por el usuario
if (operacion == 1){
    resultado = suma(cantidad1, cantidad2);
  } else if (operacion == 2){
    resultado = resta(cantidad1, cantidad2);
  } else if (operacion == 3){
    resultado = multiplicacion(cantidad1, cantidad2);
  } else if (operacion == 4){
    resultado = division(cantidad1, cantidad2);
  } else {
    alert('Por favor escoja una opción válida');
  }

  //escribimos el resultado
  alert('El resultado es ' + resultado);