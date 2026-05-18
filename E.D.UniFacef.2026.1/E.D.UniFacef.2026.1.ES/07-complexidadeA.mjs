/* O(1), porque a operação de acesso ao primeiro elemento do array é feita em tempo constante, independente do tamanho do array*/

const array = [5,6,7,8,9,2,3,4,1]

function exemplo01(array){
    const inicio = performance.now()
    if (array.length === 0) return null
    const elemento = array[3]
    const fim = performance.now()

    const memoriaPilhaMB = (array.length * 4) / (1024 * 1024)

    let memoriaTotalMB = "N/A"
    if(typeof process !== "undefined" && process.memoryUsage){
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024
    }
    console.clear
    console.log("--- Análise de complexidade Interativa O(1) ---")
    console.log("Tamanho da entrada: ", array.length)
    console.log("Resultado: ", elemento)
    console.log("Tempo de Execução: ", fim-inicio, " MS")
    console.log("Memoria estimada da pilha de chamadas: ", memoriaPilhaMB, " MB")
    console.log("Memoria total usada pelo processo: ",
        typeof memoriaTotalMB === "number" ? memoriaPilhaMB.toFixed(6+ " MB") : memoriaPilhaMB

    )
}
//exemplo01(array)

/* O(log n), porque a cada iteração, valor de i é multiplicado por 2, que significa que o número de iterações
necessárias para que i atinja "n" é logaritmico em relação a "n" */

function exempleLogN(n) {
    let i = 1
    while (i < n) {
        console.log(i)
        i *= 2
    }
}
//exempleLogN(10)

/* O(n), porque a função percorre todos os elementos do array uma vez realizando uma operação constante para cada elemento*/

function exempleOn(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
let dados = Array.from({length: 5}, () => Math.random())
exempleOn(dados)

function exempleNlogN(array) {
    array.sort()
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
exempleNlogN(array)

