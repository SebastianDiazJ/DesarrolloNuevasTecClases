//export default crearEncabezado; // si quiero  llamar diferentes funciones 


// Definir la función crearEncabezado que devuelve una cadena de texto HTML representando un encabezado de navegación
export const crearEncabezado = () => { // funcion flecha // return sirve para exportar todo de una vez pero  tambien se puede hacer con const y return abajo
    
    return  `     
    <nav>
         <ul>
             <li>Home</li>
             <li>About us</li>
         </ul>    
    </nav>   
    `;
}

// No es necesario exportar como predeterminado (export default) ya que ya estamos exportando crearEncabezado mediante export const
// export default crearEncabezado;
