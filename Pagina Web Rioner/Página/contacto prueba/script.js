

// Seleccionamos el header
const header = document.querySelector('header');

// Definimos la distancia de scroll para achicar la barra
const scrollTrigger = 100; // 100px de scroll

// Función para manejar el scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > scrollTrigger) {
        header.classList.add('achicado'); // Añadimos la clase "achicado"
    } else {
        header.classList.remove('achicado'); // Removemos la clase "achicado"
    }
});