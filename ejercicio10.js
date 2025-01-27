const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para verificar si una secuencia es válida
function esSecuenciaValida(secuencia) {
  const pila = [];
  const pares = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const caracter of secuencia) {
    if (caracter === "(" || caracter === "{" || caracter === "[") {
      pila.push(caracter); // Apilar los caracteres de apertura
    } else if (caracter === ")" || caracter === "}" || caracter === "]") {
      // Comprobar si hay un par correspondiente en la pila
      if (pila.length === 0 || pila.pop() !== pares[caracter]) {
        return false;
      }
    }
  }

  // Si la pila está vacía, la secuencia es válida
  return pila.length === 0;
}

// Pedir una secuencia al usuario
rl.question("Introduce una secuencia: ", (input) => {
  if (esSecuenciaValida(input)) {
    console.log("Secuencia correcta.");
  } else {
    console.log("Secuencia incorrecta.");
  }
  rl.close();
});
