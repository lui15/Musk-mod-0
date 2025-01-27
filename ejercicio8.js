const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para verificar si un número es primo
function esPrimo(numero) {
  if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
  if (numero <= 3) return true; // 2 y 3 son primos

  // Si el número es divisible por 2 o 3, no es primo
  if (numero % 2 === 0 || numero % 3 === 0) return false;

  // Probar divisores desde 5 hasta la raíz cuadrada del número
  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) return false;
  }

  return true;
}

// Pedir un número al usuario
rl.question("Introduce un número: ", (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Por favor, introduce un número válido.");
  } else {
    if (esPrimo(numero)) {
      console.log(`${numero} es primo.`);
    } else {
      console.log(`${numero} no es primo.`);
    }
  }
  rl.close();
});
