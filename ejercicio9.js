const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para verificar si los paréntesis están balanceados
function estanBalanceados(texto) {
  let contador = 0;

  for (const caracter of texto) {
    if (caracter === "(") {
      contador++; // Incrementar si se encuentra un paréntesis de apertura
    } else if (caracter === ")") {
      contador--; // Decrementar si se encuentra un paréntesis de cierre
    }

    // Si en algún momento hay más cierres que aperturas, no está balanceado
    if (contador < 0) {
      return false;
    }
  }

  // Al final, el contador debe ser 0 para que estén balanceados
  return contador === 0;
}

// Pedir texto al usuario
rl.question("Introduce un texto: ", (input) => {
  if (estanBalanceados(input)) {
    console.log("Están balanceados.");
  } else {
    console.log("No están balanceados.");
  }
  rl.close();
});
