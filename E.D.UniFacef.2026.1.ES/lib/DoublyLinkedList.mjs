class Node {
  constructor(val) {
    this.prev = null;
    this.data = val;
    this.next = null;
  }
}

export default class DoublyLinkedList {
  #head;
  #tail;
  #count;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#count = 0;
  }

  get isEmpty() {
    return this.#count === 0;
  }

  get count() {
    return this.#count;
  }

  //método PRIVADO que encontra um nodo por sua posição
  #findNode(pos) {
    let node;
    if (pos < this.#count / 2) {
      node = this.#head;
      for (let i = 0; i < pos; i++) {
        node = node.next;
      }
    } else {
      node = this.#tail;
      for (let i = this.#count - 1; i > pos; i--) {
        node = node.prev;
      }
    }
    return node;
  }

  insert(pos, val) {
    let inserted = new Node(val);

    //1ºcaso: lista vazia
    if (this.isEmpty) {
      this.#head = inserted;
      this.#tail = inserted;
    }

    //2º caso: inserção na primeira posição
    else if (pos === 0) {
      inserted.next = this.#head;
      this.#head.prev = inserted;
      this.#head = inserted;
    }

    //3º caso: inserção na última posição
    else if (pos >= this.#count) {
      inserted.prev = this.#tail;
      this.#tail.next = inserted;
      this.#tail = inserted;
    }

    //4º caso: inserção em posição intermediaria
    else {
      let nodePos = this.#findNode(pos);

      let before = nodePos.prev;

      before.next = inserted;

      inserted.prev = before;

      inserted.next = nodePos;

      nodePos.prev = inserted;
    }

    this.#count++;
  }

  insertHead(val) {
    this.insert(0, val);
  }

  insertTail(val) {
    this.insert(this.#count, val);
  }

  //método para remover um nodo de qualuqer posição
  remove(pos) {
    //1º caso: lista vazia ou posição fora dos limites
    if (this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined;

    let removed;

    //2º caso: remoção do primeiro nodo
    if (pos === 0) {
      removed = this.#head;
      this.#head = removed.next;
      if (this.#head) this.#head.prev = null;
      if (this.#count === 1) this.#tail = null;
    }

    //3º caso: remoção do último nodo
    else if (pos === this.#count - 1) {
      removed = this.#tail;

      this.#tail = removed.prev;

      if (this.#tail) this.#tail.next = null;

      if (this.#count === 1) this.#head = null;
    }

    //4º caso: remoção em posição intermediária
    else {
      removed = this.#findNode(pos);
      let before = removed.prev;
      let after = removed.next;

      before.next = after;

      after.prev = before;
    }

    this.#count--;

    return removed.data;
  }

  removeHead() {
    return this.remove(0);
  }

  removeTail() {
    return this.remove(this.#count - 1);
  }

  peek(pos) {
    //Lista vazia ou posiação fora dos limites
    if (this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined;
    const node = this.#findNode(pos);
    return node.data;
  }

  peekHead() {
    return this.peek(0);
  }

  peekTail() {
    return this.peek(this.#count - 1);
  }

  //método que retorna a posição do nodo cujo conteúdo foi especificado
  indexOf(val) {
    const middle = Math.ceil(this.#count / 2);
    let node1 = this.#head;
    let node2 = this.#tail;

    for (let pos = 0; pos < middle; pos++) {
      if (val === node1.data) return pos;
      if (val === node2.data) return this.#count - 1 - pos;

      node1 = node1.next;
      node2 = node2.prev;
    }
    return -1;
  }

  swap(posX, posY){
    if (this.isEmpty || posX < 0 || posX >= this.#count 
      || posY < 0 || posY >= this.#count){
        return undefined
      }

      if (posX === posY) return

      const node1 = this.#findNode(posX)
      const node2 = this.#findNode(posY)

      const temp = node1.data
      node1.data = node2.data
      node2.data = temp
  }

  print() {
    let output = "( "
    let node = this.#head

    for (let i = 0; i < this.#count; i++){
      if(output !== "( ") output += ", "
      output += `[${i}]: ${node.data}`
      node = node.next 
    }
    output += ` ), count: ${this.#count}`
    return output
  }
}
