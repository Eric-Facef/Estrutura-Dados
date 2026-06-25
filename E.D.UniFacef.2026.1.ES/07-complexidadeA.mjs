// O(1), porque a operação de acesso ao primeiro elemento do array é feita em tempo constante, independentemente do tamanho do array
function exampleO1(arr1) {
  const inicio = performance.now();
  if (arr1.length === 0) return null;
  const primeiroElemento = arr1[50];
  const fim = performance.now();
  const memoriaPilhaMB = (arr1.length * 4) / (1024 * 1024);

  let memoriaTotalMB = "N/A";
  if (typeof process !== "undefined" && process.memoryUsage) {
    memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024;
  }
  console.clear();
  console.log("---Análise de complexidade Iterativa O(1)---");
  console.log("Tamanho da entrada: ", arr1.length);
  console.log("Resultado: ", primeiroElemento);
  console.log("Tempo de Execução: ", fim - inicio, " ms");
  console.log("Memória estimada da pilha de chamadas: ", memoriaPilhaMB, " MB");
  console.log(
    "Memória total usada pelo processo: ",
    typeof memoriaTotalMB === "number"
      ? memoriaTotalMB.toFixed(6) + " MB"
      : memoriaTotalMB,
  );
}

// const arr1 = [5, 7, 8, 9, 2, 3, 4];

let dados = Array.from({length: 10000}, () => Math.random())
// exampleO1(dados);



// O(log n), porque a cada iteração, o valor de i é multiplicado por 2, o que significa que o número de iterações necessárias para que i atinja "n" é logarítimico em relação a "n"
function exemploOlogN(n) {
  const inicio = performance.now();
  let i = 1;
  while (i < n) {
    i *= 2;
  }
  const fim = performance.now();
  const memoriaPilhaMB = (n * 4) / (1024 * 1024);

  let memoriaTotalMB = "N/A";
  if (typeof process !== "undefined" && process.memoryUsage) {
    memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024;
  }
  console.clear();
  console.log("---Análise de complexidade Logarítmica O(log n)---");
  console.log("Tamanho da entrada: ", n);
  console.log("Resultado: ", i);
  console.log("Tempo de Execução: ", fim - inicio, " ms");
  console.log("Memória estimada da pilha de chamadas: ", memoriaPilhaMB, " MB");
  console.log(
    "Memória total usada pelo processo: ",
    typeof memoriaTotalMB === "number"
      ? memoriaTotalMB.toFixed(6) + " MB"
      : memoriaTotalMB,
  );
}
// exemploOlogN(5);



// O(n), porque a função percorre todos os elementos do array um vez, realizando uma operação constante para cada elemento (console.log)
function exemploOn(arr2) {
  const inicio = performance.now();
  for (let i = 0; i < arr2.length; i++) {
    arr2[i]
  }

  const fim = performance.now();
  const memoriaPilhaMB = (arr2.length * 4) / (1024 * 1024);

  let memoriaTotalMB = "N/A";
  if (typeof process !== "undefined" && process.memoryUsage) {
    memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024;
  }
  console.clear();
  console.log("---Análise de complexidade Linear O(n)---");
  console.log("Tamanho da entrada: ", arr2.length);
  console.log("Resultado: ", arr2);
  console.log("Tempo de Execução: ", fim - inicio, " ms");
  console.log("Memória estimada da pilha de chamadas: ", memoriaPilhaMB, " MB");
  console.log(
    "Memória total usada pelo processo: ",
    typeof memoriaTotalMB === "number"
      ? memoriaTotalMB.toFixed(6) + " MB"
      : memoriaTotalMB,
  );
}

const arr2 = [1, 2, 3, 4, 5];
exemploOn(dados);

// O(n^2), porque a função contém dois loops aninhados que percorrem todos os elentos do array, resultando em um número total de operações proporcional ao quadrado do tamanho do array
function exemploN2(arr3) {
  const inicio = performance.now();
  for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3.length; j++) {
        arr3[i], arr3[j]
    }
  }
  const fim = performance.now();
  const memoriaPilhaMB = (arr3.length * 4) / (1024 * 1024);

  let memoriaTotalMB = "N/A";
  if (typeof process !== "undefined" && process.memoryUsage) {
    memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024;
  }
  console.clear();
  console.log("---Análise de complexidade Quadrática O(n^2)---");
  console.log("Tamanho da entrada: ", arr3.length);
  console.log("Resultado: ", arr3, arr3);
  console.log("Tempo de Execução: ", fim - inicio, " ms");
  console.log("Memória estimada da pilha de chamadas: ", memoriaPilhaMB, " MB");
  console.log(
    "Memória total usada pelo processo: ",
    typeof memoriaTotalMB === "number"
      ? memoriaTotalMB.toFixed(6) + " MB"
      : memoriaTotalMB,
  );
}

const arr3 = [1, 2, 3, 4, 5];
// exemploN2(arr3);
