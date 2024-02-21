//declare una variable//
let nombreUsuario;
// declaracion con valor inicial//
let user ="Juan "

//ejecutar en el navegador con la consola de inspeccionar//
console.log(nombreUsuario);

//carga el usuario//
console.log(user);
//operador ternario 
// las rayitas son para comparar 
user ==="Pedro"?console.log("verdadero"):console.log("falso");
//const es parecido a contante 

const PI=3.1416;
//cambio valor
//PI=20
// let variables
//const constantes

//metodos  del lenguaje 
let PI_DOS;
PI_DOS = Math.PI;
user.includes("P");
console.log(user.length);

//metodos o funciones

// arrow function
const saludarUsuario = ()=>{
    return "hola Juan";
}
//concatenando
const saludarUser = nameUser => {
    return "Hola " + nameUser;
}
const sumarDatos =(numberOne,numberTwo) =>{
    return numberOne+numberTwo;
}
console.log(sumarDatos(1.0,'2'));

//llamar usuario y concatenar con otra funcion 
let tres = saludarUser;
console.log(tres("Pedro"));

//ciclos 
for(let i = 0; i<10;i++){

}

//funciones forma anterior
function sum (numero1,numero2){
}

const wave = function(){

}


//seguimiento contruir 3 funciones (arrow function)
//sin parametros, 1 parametro , 2 o mas parametros , y declarar variables  con let y const  como min 5 
//integrar con llamado a funciones y mostrar resultados  .

//sin parametros 
const sinParametrosFunction = () => {
    console.log(' hola a todos los saludo ');
  }
  sinParametrosFunction();

  //1 parametro resivir un parametro y que entregue un parametro  puede ser saludar 

let UnParametroFunction = (param) => {
  console.log(`hola solo tengo una parametro :): ${param}.`);
}
UnParametroFunction('Ejemplo:');

//dos parametros    una suma o una multiplicacion 




