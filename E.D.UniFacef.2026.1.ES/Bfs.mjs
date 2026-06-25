import Queue from "./lib/Queue.mjs"

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
}


//implementação da busca por largura 
function bfs(grafo, inicio){

    //O set é uma estrutura de dados nativa do JS (como se fosse um array), mas com duas regras:
    //Não permite elementos duplicatos: se vc tentar add o valor 'A' três vezes, ele guarda apenas uma
    //Busca instantânea: o método .has() descobre se um elemento está lá dentro muito mais rápido do que fazer um indexOf ou includes 
    const visitados = new Set()
    
    const fila = new Queue();

    fila.enqueue(inicio)

    while(!fila.isEmpty){

        const no = fila.dequeue()

        if(!visitados.has(no)){
            console.log(no)
            visitados.add(no)

            for(const vizinho of grafo[no]){
                if(!visitados.has(vizinho)){
                    fila.enqueue(vizinho)
                }
            }
        }
    }

}

bfs(grafo, "A")