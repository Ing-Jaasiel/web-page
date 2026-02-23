const imagenElemento = document.getElementById('slider-image');
const misImagenes = [
    'img/imagen.jpg', // Cambia esto por la ruta de tu primera foto
    'img/redesinfinitas.png'  // Cambia esto por la ruta de tu segunda foto
];

let indice = 0;

function cambiarImagen() {
    // 1. Empezamos a desvanecer la imagen actual
    imagenElemento.style.opacity = 0;

    setTimeout(() => {
        // 2. Cambiamos la fuente de la imagen después de que desaparezca
        indice = (indice + 1) % misImagenes.length;
        imagenElemento.src = misImagenes[indice];
        
        // 3. Volvemos a mostrar la nueva imagen
        imagenElemento.style.opacity = 1;
    }, 800); // Este tiempo debe coincidir con el transition del CSS
}

// Ejecutar la función cada 4 segundos
setInterval(cambiarImagen, 4000);