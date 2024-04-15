import  {crearEncabezado} from "./encabezado.js"; // SE LLAMA LA FUNCION con export 
import { crearBoton, crearBoton2 } from "./boton.js";


const main = document.createElement("div"); // se enlza con la pagina index que se creo 
//poner la clase
main.classList.add("main-navigation");
main.innerHTML = crearEncabezado();

document.body.appendChild(main);
 //open child : coloque un nuevo hijo , asi es como se pone en el body ...
const divBoton = document.createElement("div");
//aqui llama a boton

divBoton.appendChild(crearBoton("main-boton","Enviar")); // aqui llama los parametros de boton 
document.body.appendChild(divBoton); // se utiliza para agregar el elemento divBoton al cuerpo del documento HTML.

//buscar boton por id 
const botonStilo = document.getElementById("btOne");
//stilo del boton 
botonStilo.style.color = "blue";
botonStilo.style.backgroundColor = "red";

