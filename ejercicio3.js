const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function frecuenciaCaracteres(cadena) {
  const mapa = new Map();
  cadena
    .toLowerCase()
    .split("")
    .forEach((caracter) => {
      if (mapa.has(caracter)) {
        mapa.set(caracter, mapa.get(caracter) + 1);
      } else {
        mapa.set(caracter, 1);
      }
    });
  return mapa;
}

rl.question("Introduce un texto: ", (input) => {
  const resultado = frecuenciaCaracteres(input);
  console.log("Mapa de frecuencias:");
  console.log(resultado);
  rl.close();
});
