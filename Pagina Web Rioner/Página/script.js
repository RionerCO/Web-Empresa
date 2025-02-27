const palabras = ["negocio", "empresa","industria", "compañia", "emprendimiento", "comercio"];
const elemento = document.getElementById("cambiarPalabra");
let indicePalabra = 0;
let indiceLetra = 0;
let estaBorrando = false;

function efectoTipeo() {
    const palabraActual = palabras[indicePalabra];

    // Si está escribiendo
    if (!estaBorrando) {
        elemento.textContent = palabraActual.substring(0, indiceLetra + 1);
        indiceLetra++;

        // Si se completó la palabra, comienza a borrar después de un tiempo
        if (indiceLetra === palabraActual.length) {
            estaBorrando = true;
            setTimeout(efectoTipeo, 1000); // Espera 1 segundo antes de borrar
            return;
        }
    } 
    // Si está borrando
    else {
        elemento.textContent = palabraActual.substring(0, indiceLetra - 1);
        indiceLetra--;

        // Si se borró toda la palabra, pasa a la siguiente palabra
        if (indiceLetra === 0) {
            estaBorrando = false;
            indicePalabra = (indicePalabra + 1) % palabras.length; // Cambia a la siguiente palabra
        }
    }

    // Velocidad del efecto (tiempo entre letras)
    const velocidad = estaBorrando ? 100 : 200; // Más rápido al borrar
    setTimeout(efectoTipeo, velocidad);
}

// Inicia el efecto
efectoTipeo();






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









