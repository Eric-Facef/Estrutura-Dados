import Stack from "./lib/Stack.mjs";

const grafo = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: [],
};

//implementação da busca profundidade (DFS)
function dfs(grafo, inicio) {
  const visitados = new Set();

  //cria uma nova instância da Pilha (LIB)
  const pilha = new Stack();

  pilha.push(inicio);

  while (!pilha.isEmpty) {
    const no = pilha.pop();

    if (!visitados.has(no)) {
      console.log(no);
      visitados.add(no);

      //guarda o vetor de vizinhos do nó atual em uma variável para facilitar o acesso por índice
      const vizinho = grafo[no];

      //Faz um laço FOR decrescente (começa na última posição e vai até a posição 0)
      //Issso server para colocar o primeiro vizinho no topo da pilha por último (LIFO)
      for (let i = vizinho.length - 1; i >= 0; i--) {
        //checa se o zinho daquela posição específica (i) ainda não foi visitado
        if (!visitados.has(vizinho[i])) {
          //empilha o vizinho na estrutura para que ele seja o próximo a ser explorado
          pilha.push(vizinho[i]);
        }
      }
    }
  }
}

dfs(grafo, "A");
