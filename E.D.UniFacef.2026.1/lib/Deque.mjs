export default class Deque {
  #data; //vetor privado

  constructor() {
    this.#data = [];
  } 

  //método para inserir dados no início da estrutura
  insertFront(val) {
    this.#data.unshift(val);
  }

  //método para inserir dados no final da estrutura
  insertBack(val) {
    this.#data.push(val);
  }

  //método para remover dados no início da estrutura
  removeFront() {
    return this.#data.shift();
  }

  //método para remover dados no final da estrutura
  removeBack() {
    return this.#data.pop();
  }

  //método para consultar o ínicio da estrutura
  peekFront() {
    return this.#data[0];
  }

  //método para consultar o final da estrutura
  peekBack() {
    return this.#data[this.#data.length - 1];
  }

  get isEmpty() {
    return this.#data.length === 0 ? "Sim, está vazia!" : "Não!"
  }

  //método para imprimir (efeitos de depuração)
  print() {
    let output = "[ ";
    for (let i = 0; i < this.#data.length; i++) {
      if (output !== "[ ") {
        output += ", ";
      }
      output += `(${i + 1}º): ${this.#data[i]}`;
    }
    return output + " ]";
  }
}
