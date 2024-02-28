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