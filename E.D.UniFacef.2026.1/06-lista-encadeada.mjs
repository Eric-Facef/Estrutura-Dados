import LinkedList from "./lib/LinkedList.mjs";

const lista = new LinkedList

console.log("A lista está vazia? "
    + lista.isEmpty ? "Sim, está vaia" : "Não!"
)
console.log(lista.print())

lista.insert(0, 'Fusca')
lista.insert(0, 'Corcel')
lista.insert(2, 'Diplomata')
lista.insert(3, 'Chevette')
lista.insert(4, 'Uno')

console.log(lista.print())

lista.insert(3, 'Gol GV')

console.log(lista.print())

lista.insertHead("Belina")
lista.insertTail("Del Rey")

console.log(lista.print())

let removido = lista.remove(0)

console.log({removido})

console.log(lista.print())

let idxFusca = lista.indexOf("Fusca")
let idxDiplomata = lista.indexOf("Diplomata")
let idxNinguem = lista.indexOf("Ninguem")

console.log({idxFusca, idxDiplomata, idxNinguem})

let pos0 = lista.peek(0)
let pos3 = lista.peek(3)
let pos10 = lista.peek(10)

console.log({pos0, pos3, pos10})

