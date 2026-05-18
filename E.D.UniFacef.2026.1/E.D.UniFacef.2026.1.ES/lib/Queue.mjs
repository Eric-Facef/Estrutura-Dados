export default class Queue{

    #data //Vetor print

    constructor(){
        this.#data = []
    }

    //método de inserção na fila
    enqueue(val){
        this.#data.push(val)
    }

    //método de remoção na fila
    dequeue(){
        return this.#data.shift()
    }

    //método para consultar o inicio da fila sem remover o elemento
    peek(){
        return this.#data[0]
    } 

    get isEmpty(){
        return this.#data.length === 0
    }

    //método para imprimir a fila(efeitos de depuração)
    print(){
        let output = '[ '
        for(let i=0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", "
            } 
            output += `(${i+1}º): ${this.#data[i]}`
        }
        return output + " ]"
    }

}