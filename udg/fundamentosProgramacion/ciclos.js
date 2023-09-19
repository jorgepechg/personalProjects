//creo un indice
var a = 0;
//creo mi condicion de verificacion 
while (a < 3) {
    alert ("Hola mundo " + a);
    //incremento el indice 
    a++;
}

for (var i = 1; i < 4; i++) {
    alert ("Hola mundo " + i);
}



//Ciclo while para la suma de una serie

//creo una variable para el indice 
var n = 1;
//creo una variable para la suma de la serie
var s = 0;
//creo mi condicion de verificacion, que la suma de la serie sea igual o menor a 100
while (s <= 100) {
    //formula para calcular la suma de la serie
    s = ((n - (n - 1) + n) * n ) / 2;
    //alerta con el resultado
    alert ("Iteración " + n + " = " + s);
    //incremento el indice 
    n++;
}

//Ciclo for para la suma de una serie

for (var n = 1, s = 0; s <= 100; n++) {
    s = ((n - (n - 1) + n) * n ) / 2;
    alert ("Iteración " + n + " = " + s);
}