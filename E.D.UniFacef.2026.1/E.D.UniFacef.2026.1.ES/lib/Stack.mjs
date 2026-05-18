export default class Stack {

    #data // vetor privado

    constructor(){
        this.#data = []
    }

    //método de inserção no vetor
    push(val){
        this.#data.push(val)
    }

    //método para remoção do valor
    pop(){
        return this.#data.pop()
    }

    //método para consultar o topo da pilha
    peek(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0
    }
    
    print(){
        return JSON.stringify(this.#data)
    }

}