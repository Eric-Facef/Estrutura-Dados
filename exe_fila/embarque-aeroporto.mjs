/*
    No aeroporto, os passageiros embarcam no avião seguindo a ordem de check-in.
    A sequência inicial de passageiros é:

    * Passageiro A
    * Passageiro B
    * Passageiro C
    * Passageiro D
    * Passageiro E
    
    1-) Crie um objeto filaAeroporto e insira os passageiros na fila corretamente.

    2-) Imprima a fila antes do início do embarque.

    3-) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Três novos passageiros fizeram check-in:

    * Passageiro F
    * Passageiro G
    * Passageiro H
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.

    8-) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.

    */
import Queue from "./Queue.mjs"

const filaAeroporto = new Queue()

filaAeroporto.enqueue("A")
filaAeroporto.enqueue("B")
filaAeroporto.enqueue("C")
filaAeroporto.enqueue("D")
filaAeroporto.enqueue("E")

console.log("Fila inicial:", filaAeroporto)

const primeiro = filaAeroporto.dequeue()
console.log("Embarcou:", primeiro)

console.log("Fila após remoção:", filaAeroporto)

filaAeroporto.enqueue("F")
filaAeroporto.enqueue("G")
filaAeroporto.enqueue("H")

console.log("Fila atualizada:", filaAeroporto)

console.log("Próximo:", filaAeroporto.peek())

filaAeroporto.dequeue()
console.log("Fila final:", filaAeroporto)
