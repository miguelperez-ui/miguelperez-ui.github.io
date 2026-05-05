// Listado de palabras para el juego
const listaPalabras = ["javascript", "programacion", "desarrollo", "frontend", "logica"];

// Variables de control
let palabraSecreta = "";
let letrasAdivinadas = [];

/**
 * Prepara el juego al cargar la página
 */
function inicializarJuego() {
    // 1. Elegir una palabra al azar de la lista
    const indiceAleatorio = Math.floor(Math.random() * listaPalabras.length);
    palabraSecreta = listaPalabras[indiceAleatorio];

    // 2. Crear el array de guiones (ej: ["_", "_", "_"])
    letrasAdivinadas = Array(palabraSecreta.length).fill("_");

    // 3. Mostrar el estado inicial en la web
    actualizarPantalla();
}

/**
 * Refresca la visualización de la palabra en el HTML
 */
function actualizarPantalla() {
    const contenedor = document.getElementById("word-display");
    // Unimos el array con espacios para que se vea: _ _ _ _
    contenedor.innerText = letrasAdivinadas.join(" ");
}

/**
 * Se ejecuta al pulsar el botón de enviar
 */
function procesarIntento() {
    const input = document.getElementById("letter-input");
    const letraUsuario = input.value.toLowerCase();

    // Validar que el usuario haya escrito algo
    if (!letraUsuario) return;

    // Recorremos la palabra secreta para buscar coincidencias
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letraUsuario) {
            // Sustituimos el guion por la letra real en esa posición
            letrasAdivinadas[i] = letraUsuario;
        }
    }

    // Actualizamos la interfaz con los nuevos aciertos
    actualizarPantalla();

    // Limpiamos el cuadro de texto y ponemos el cursor listo para la siguiente
    input.value = "";
    input.focus();

    // Verificamos si ya no quedan guiones por descubrir
    verificarSiGano();
}

/**
 * Comprueba si el juego ha terminado
 */
function verificarSiGano() {
    // Si ya no hay "_" en nuestro array, el usuario ha ganado
    if (!letrasAdivinadas.includes("_")) {
        // Usamos un pequeño tiempo de espera para que la letra aparezca en pantalla antes del aviso
        setTimeout(() => {
            alert("¡Enhorabuena! Has descubierto la palabra: " + palabraSecreta);
            location.reload(); // Recarga la página para reiniciar
        }, 200);
    }
}

// Ejecutar la función de inicio nada más cargar el documento
window.onload = inicializarJuego;