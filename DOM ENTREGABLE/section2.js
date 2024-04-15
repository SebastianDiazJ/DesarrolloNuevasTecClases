const displayTimeAndDay = () => {
    const section2Div = document.getElementById('section2');
    

    // Crear elementos para mostrar la hora el dia y el estado de día/noche
    const timeElement = document.createElement('p');
    const dayElement = document.createElement('p');
    const dayNightElement = document.createElement('p');

    
    

    // Funcion para obtener la hora actual 
    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

   
    const isDaytime = () => {
        const now = new Date();
        const hour = now.getHours();
        return hour >= 6 && hour < 18; //dia hasta las 6 
    };

    // Actualizar el contenido de los elementos
    const updateInfo = () => {
        const currentTime = getCurrentTime();
        const currentDate = new Date().toDateString();
        const isDay = isDaytime() ? 'Día' : 'Noche';

        timeElement.textContent = `Hora: ${currentTime}`;
        dayElement.textContent = `Día: ${currentDate}`;
        dayNightElement.textContent = `Estado: ${isDay}`;
    };

    // Mostrar información actualizada cada segundo
    setInterval(updateInfo, 1000);

    // Agregar elementos al contenedor de la section2
    section2Div.appendChild(timeElement);
    section2Div.appendChild(dayElement);
    section2Div.appendChild(dayNightElement);

    // Inicializar la información al cargar la página
    updateInfo();
};

export { displayTimeAndDay };
