// Definir la función crearBoton que crea y devuelve un botón con una clase y un texto dados
export const crearBoton = (clase, texto) => {
    const boton = document.createElement("button");
    boton.type = 'button';
    boton.textContent = texto;
    boton.classList.add(clase);
    boton.id="btOne";
    return boton; // Devolver 
}


