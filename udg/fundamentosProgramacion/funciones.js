r = parseFloat(prompt('Ingrese el radio del cilindro:',''));
h = parseFloat(prompt('Ingrese la altura del cilindro:',''));


function area_cilindro(radio, altura){
    area = 2 * Math.PI * radio * (radio + altura);
    return area;
}

function volumen_cilindro(radio, altura) {
    volumen = Math.PI * Math.pow(radio, 2) * altura;
    return volumen;
}

volumen_cilindro(r, h);
area_cilindro(r, h);

document.write('El area es: ' + area + ' y el volumen es: ' + volumen);

//////

//FUNCION PARA CALCULAR AREA Y VOLUMEN DE CILINDRO

//Pedimos al usuario los valores de radio y altura de un cilindro y los almacenamos.
let r = parseFloat(prompt('Ingrese el radio del cilindro:',''));
let h = parseFloat(prompt('Ingrese la altura del cilindro:',''));

//Creamos la funcion que nos calcula dos valores: el area y el volumen de un cilindro.
function calcularCilindro(radio, altura){
    const area = 2 * Math.PI * radio * (radio + altura);
    const volumen = Math.PI * Math.pow(radio, 2) * altura;
    return {area, volumen};
}

//Usamos desestructuración de objetos para retornar los dos valores de la funcion
const {
    area: resultadoArea,
    volumen: resultadoVolumen
} = calcularCilindro(r, h);

//Escribimos los resultados en pantalla
document.write('El area es: ' + resultadoArea + ' y el volumen es: ' + resultadoVolumen);