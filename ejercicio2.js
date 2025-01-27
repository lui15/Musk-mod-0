const readline = require("readline");

// Crear una interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para calcular la diferencia entre dos arrays
function diferenciaArrays(array1, array2) {
  return array1.filter((elemento) => !array2.includes(elemento));
}

// Leer los arrays desde la entrada del usuario
rl.question(
  "Introduce el primer array de números separados por comas: ",
  (input1) => {
    rl.question(
      "Introduce el segundo array de números separados por comas: ",
      (input2) => {
        // Convertir las entradas en arrays de números
        const array1 = input1.split(",").map((num) => parseFloat(num.trim()));
        const array2 = input2.split(",").map((num) => parseFloat(num.trim()));

        // Validar que las entradas sean números válidos
        if (array1.some(isNaN) || array2.some(isNaN)) {
          console.log("Por favor, introduce solo números en los arrays.");
        } else {
          const resultado = diferenciaArrays(array1, array2);
          console.log(
            `La diferencia de ambos conjuntos es [${resultado.join(", ")}]`
          );
        }
        rl.close(); // Cerrar la interfaz
      }
    );
  }
);
