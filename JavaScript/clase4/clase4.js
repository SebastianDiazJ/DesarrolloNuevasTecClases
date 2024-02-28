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






