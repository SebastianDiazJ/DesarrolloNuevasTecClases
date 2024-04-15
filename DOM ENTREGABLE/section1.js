const createSection1 = () => {
    const section1Div = document.getElementById('section1'); // se llama la seccion 
    const section1Content = document.createElement('p');
    section1Content.textContent = 'Contenido de la sección 1';
    section1Div.appendChild(section1Content);

    const colorButton = document.createElement('button'); // se  crea un boton
    colorButton.textContent = 'Dele aqui'; // Texto del btn

    section1Div.appendChild(colorButton);

    // Funcion  para cambiar el color de fondo
    colorButton.addEventListener('click', () => {
        const randomColor = getRandomColor(); // color aleatorio
        section1Div.style.backgroundColor = randomColor; // Aplicar el color de fondo
    });
};

// Funcion para generar un color ramdon
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export { createSection1 };


