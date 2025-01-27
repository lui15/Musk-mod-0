const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función que invierte una palabra usando una pila
function invertirPalabraConPila(palabra) {
  const pila = [];

  // Apilar cada carácter en la pila
  for (const caracter of palabra) {
    pila.push(caracter);
  }

  // Desapilar los caracteres y construir la palabra invertida
  let palabraInvertida = "";
  while (pila.length > 0) {
    palabraInvertida += pila.pop();
  }

  return palabraInvertida;
}

// Leer una palabra del usuario
rl.question("Introduce una palabra: ", (input) => {
  const palabraInvertida = invertirPalabraConPila(input);
  console.log(`La palabra invertida es "${palabraInvertida}".`);
  rl.close();
});
