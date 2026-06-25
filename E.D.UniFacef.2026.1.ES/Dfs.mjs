import Stack from "./lib/Stack.mjs";

const grafo = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: [],
};

//implementação da busca em profundidade(DFS)
function dfs(grafo, inicio) {
  //O Set é um estrutura de dados nativa do JSn (como array) mas com duas regras:
  //Não permite elementos duplicados
  // Busca instantânia com o método .has()
  const visitados = new Set();

  const pilha = new Stack();

  pilha.push(inicio);

  while (!pilha.isEmpty) {
    const no = pilha.pop();

    if (!visitados.has(no)) {
      console.log(no);
      visitados.add(no);

      const vizinhos = grafo[no];

      for (let i = vizinhos.length - 1; i >= 0; i--) {
        if (!visitados.has(vizinhos[i])) {
          pilha.push(vizinhos[i]);
        }
      }
    }
  }
}

dfs(grafo, "A");
