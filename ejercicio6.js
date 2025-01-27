// Generar un array de números aleatorios
function generarArrayAleatorio(tamaño, max = 1000000) {
  return Array.from({ length: tamaño }, () => Math.floor(Math.random() * max));
}

// Implementar el algoritmo Bubble Sort
function bubbleSort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Intercambiar elementos
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// Medir el tiempo de ejecución
function medirTiempoEjecucion() {
  const tamaño = 100000;
  const array = generarArrayAleatorio(tamaño);

  console.log(`Ordenando ${tamaño} elementos con Bubble Sort...`);

  const inicio = Date.now(); // Marcar tiempo de inicio
  bubbleSort(array); // Ordenar el array
  const fin = Date.now(); // Marcar tiempo de fin

  const tiempo = (fin - inicio) / 1000; // Convertir milisegundos a segundos
  console.log(
    `El algoritmo bubble sort ha tardado ${tiempo} segundos en ordenar ${tamaño} elementos.`
  );
}

// Ejecutar la función
medirTiempoEjecucion();
