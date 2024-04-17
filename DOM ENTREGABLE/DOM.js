import { createSection1 } from './section1.js';
import { displayTimeAndDay } from './section2.js';
import { createSection3 } from './section3.js';

document.addEventListener('DOMContentLoaded', () => {
    // Estilo CSS 
    const style = document.createElement('style');
    style.textContent = `
        #section1 {
            background-color: #f0f0f0;
            padding: 20px;
            margin-bottom: 20px;
        }

        #section2 {
            background-color: #e0e0e0;
            padding: 20px;
            margin-bottom: 20px;
        }

        #section3 {
            background-color: #d0d0d0;
            padding: 20px;
            margin-bottom: 20px;
        }

        /* Estilo encabezado */
        h1 {
            color: blue;
            font-size: 24px;
        }

        /* Estilo footer */
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
        }
    `;

    // Agregar los estilos al head del documento
    document.head.appendChild(style);

    // Crear y manipular las secciones dinámicamente
    const section1 = document.createElement('div');
    section1.id = 'section1';
    section1.textContent = 'Contenido para la sección 1';
    document.body.appendChild(section1);

    const section2 = document.createElement('div');
    section2.id = 'section2';
    section2.textContent = 'Contenido para la sección 2';
    document.body.appendChild(section2);

    const section3 = document.createElement('div');
    section3.id = 'section3';
    section3.textContent = 'Contenido para la sección 3';
    document.body.appendChild(section3);

    //FOOTER 
    const footer = document.createElement('footer');
    footer.textContent = 'Sebastian Diaz 2024';
    document.body.appendChild(footer);

    // Llamadas a las funciones para manipular las secciones
    createSection1(); // SE LLAMA a la  funcion que cambia color 
    displayTimeAndDay(); // Función para mostrar la hora y día en section2
    createSection3(); // se llama a la funcion que crea numeros ramdon
});
