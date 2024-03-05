//arreglos (arrays)
let numeros =[10.34,1,100.312]
//cualquier tipo de dato 
const varios =["Juan",true,10,null,3.0]

console.log(numeros);
console.log(varios[0]); // se pone eso para imprimir solo el que queramos 
console.log(varios.length);

//agrego al final
numeros.push("Colombia");
console.log(numeros);
//quito el ultimo
numeros.pop();


//poner al inicio
numeros.unshift("Brasil");
//quitar el primero 
numeros.shift();
console.log(numeros);

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//metodos para arreglos 
//1.reduce
let reducido = numeros.reduce((acomulador,valorActual)=>{
    return acomulador+valorActual;
})
console.log(reducido);

//metodo 2. filter
let filtrado = numeros.filter(dato=>{
    return dato >10;    
})

console.log(filtrado);

//filtrar por paises palabras
let strings =["Colombia","brasil","comors","comfama"]

console.log(strings.filter(dato=>{
    return dato.startsWith("Co");
}));

//cada uno de los elementos que estan arribba en el arreglo se le agrega a otro 
let mapeo = strings.map(pais =>{
    return pais.concat("Hola");
})

console.log(mapeo);

//
let mapped = numeros.map(numero => { 
    return Math.pow(numero,2);
})
console.log(mapped);


//4 forEach

numeros.forEach(numero => {
    console.log(numero);
})




// TAREA PROXIMA CLASE 
//CREAR ARREGLOS USANDO FUNCIONES (FLECHA) MINIMO 4 AREGLO 
//USAR METODOS DE ARREGLOS Y MOSTRAR RESULTADOS(PARA CADA ARREGLO MINIMO 1 METODO  DISTINTO ), FOREACH
//FILTER , USANDO CALLBACKFN 
//DECLARAR Y USO LA FUNCION Y SE LE APLICAN METODOS , SE MUESTRA EN CONSOLA 
//SE PUEDEN USAR LOS ARREGLOS VISTOS  



// CREAR ARREGLOS USANDO FUNCIONES (FLECHA) MINIMO 4 ARREGLOS
const arreglo1 = [1, 2, 3, 4, 5,6,7,8,12,16];
const arreglo2 = ["s", "e", "b", "a", "e","k"];
const arreglo3 = [true, false, true, true, false];
const arreglo4 = [10, 20, 15.7, 30, 25];

// metodos de arreglo y forEach
console.log("Arreglo 1:");

// filter para obtener  los números pare
const pares = arreglo1.filter(num => num % 2 === 0);
console.log("Números pares:", pares);

console.log("Arreglo 2:");
//  map para convertir cada letra a mayúsculas
const mayusculas = arreglo2.map(letra => letra.toUpperCase());
console.log("Mayúsculas:", mayusculas);

console.log("Arreglo 3:");
// metodo reduce para contar cuántos elementos son falsos
const contarFalsos = arreglo3.reduce((contador, valor) => contador + (valor === false ? 1 : 0), 0);
console.log("Cantidad de falsos:", contarFalsos);

console.log("Arreglo 4:");
// metodo forEach para el arreglo elevado a 2
arreglo4.forEach(num => console.log(num ** 2));



