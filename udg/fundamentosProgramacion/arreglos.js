/*Elabora el código en el que le sumes 5 a cada elemento del arreglo, y lo muestres indicando qué lugar ocupa el elemento en el arreglo.*/

//Creo mi arreglo
let miArreglo = [101,102,103,104,105,106];
//Inicio mi indice para acceder a cada elemento del arreglo
let index = 0;
//variable para el valor final de cada elemento
let valorFinal;

//Con un ciclo while voy incrementando mi indice hasta alcanzar el total del arreglo
while (index < 6) {
    //utilizo el método at para acceder al elemento ubicado en el indice y sumarle 5
    valorFinal = miArreglo.at(index) + 5;
    //con una alerta muestro el valor final del elemento, su indice y su valor original
    alert("El elemento " + index + " del arreglo es " + miArreglo.at(index) + " y su valor final es " + valorFinal);
    //incremento el indice
    index++;
}   



/*


let miArreglo = [101,102,103,104,105,106];
let n = 0;
let valorFinal;

while (miArreglo[0] < 107) {
    valorFinal = miArreglo[0] + 5;
    alert("El elemento " + n + " del arreglo es " + miArreglo[0] + " y su valor final es " + valorFinal);
    n++;
    miArreglo[0]++;
}
*/

