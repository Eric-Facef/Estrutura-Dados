class MatrizDensaEsparsa {
  constructor(linhas, colunas) {
    this.linhas = linhas;
    this.colunas = colunas;
    this.dados = [];
  }

  inserir(linha, coluna, valor) {
    if (valor !== 0) {
      this.dados.push({ linha, coluna, valor });
    }
  }

  exibir() {
    for (const item of this.dados) {
      console.log(`Linha: ${item.linha}, Coluna: ${item.coluna}, Valor = ${item.valor}`);
    }
  }
}

const matriz = new MatrizDensaEsparsa(4,4)
matriz.inserir(0,0,0)
matriz.inserir(1,0,0)
matriz.inserir(2,0,0)
matriz.inserir(3,0,3)
matriz.inserir(0,1,0)
matriz.inserir(1,1,8)
matriz.inserir(2,1,0)
matriz.inserir(3,1,0)
matriz.inserir(0,2,0)
matriz.inserir(1,2,0)
matriz.inserir(2,2,0)
matriz.inserir(3,2,0)
matriz.inserir(0,3,5)
matriz.inserir(1,3,0)
matriz.inserir(2,3,0)
matriz.inserir(3,3,0)
matriz.exibir()