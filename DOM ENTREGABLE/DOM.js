import { createSection1 } from './section1.js';
import { displayTimeAndDay } from './section2.js';
import { createSection3 } from './section3.js';

document.addEventListener('DOMContentLoaded', () => {
    // Llamadas a las funciones 
    createSection1();
    displayTimeAndDay(); // Llamada a la función para mostrar la hora y el día en la section2
    createSection3();

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

        /* Estilo  encabezado  */
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

    // A estilos al head del documento
    document.head.appendChild(style);
});
