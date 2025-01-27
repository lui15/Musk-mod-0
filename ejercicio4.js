const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para contar la frecuencia de caracteres de una cadena utilizando un Map
function contarFrecuencia(cadena) {
  const mapa = new Map();
  for (const caracter of cadena.toLowerCase().replace(/\s+/g, "")) {
    mapa.set(caracter, (mapa.get(caracter) || 0) + 1);
  }
  return mapa;
}

// Función para verificar si dos palabras son anagramas
function sonAnagramas(palabra1, palabra2) {
  const mapa1 = contarFrecuencia(palabra1);
  const mapa2 = contarFrecuencia(palabra2);

  if (mapa1.size !== mapa2.size) {
    return false;
  }

  for (const [caracter, frecuencia] of mapa1.entries()) {
    if (mapa2.get(caracter) !== frecuencia) {
      return false;
    }
  }

  return true;
}

// Leer dos palabras del usuario
rl.question("Introduce una palabra: ", (palabra1) => {
  rl.question("Introduce otra palabra: ", (palabra2) => {
    if (sonAnagramas(palabra1, palabra2)) {
      console.log("Las palabras son anagramas.");
    } else {
      console.log("Las palabras no son anagramas.");
    }
    rl.close();
  });
});
