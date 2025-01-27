const readline = require("readline");

// Crear una interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para encontrar palabras repetidas en un texto
function palabrasRepetidas(texto) {
  const palabras = texto.toLowerCase().replace(/[\.,]/g, "").split(/\s+/); // Convertir a minúsculas, eliminar puntuación y dividir por espacios
  const mapa = new Map();
  const repetidas = new Set();

  palabras.forEach((palabra) => {
    if (mapa.has(palabra)) {
      repetidas.add(palabra);
    } else {
      mapa.set(palabra, true);
    }
  });

  return Array.from(repetidas);
}

// Pedir texto al usuario
rl.question("Introduce un texto: ", (input) => {
  const resultado = palabrasRepetidas(input);
  if (resultado.length === 0) {
    console.log("No hay palabras repetidas.");
  } else {
    console.log(`Se repiten las siguientes palabras: ${resultado.join(", ")}`);
  }
  rl.close(); // Cerrar la interfaz
});
