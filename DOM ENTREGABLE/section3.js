const createSection3 = () => {
    const section3Div = document.getElementById('section3');

    // se crea un  elemento para mostrar el número generado
    const randomNumberDisplay = document.createElement('p');
    randomNumberDisplay.textContent = 'Presiona el botón para generar un número aleatorio.';
    section3Div.appendChild(randomNumberDisplay);

    //  se crea el botn para generar los num
    const generateButton = document.createElement('button');
    generateButton.textContent = 'Generar Número Aleatorio';

    // Funciion cpara generar y mostrar un num aleatorio
    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
        randomNumberDisplay.textContent = `Número Aleatorio: ${randomNumber}`;
    };

    
    generateButton.addEventListener('click', generateRandomNumber);

    
    section3Div.appendChild(generateButton);
};

export { createSection3 };
