import Deque from "./lib/Deque.mjs"

let listaCompras = new Deque()
console.log(listaCompras.print())
console.log("Está vazia?\n", listaCompras.isEmpty)

//produtos alimenticio -> inicio
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão") 
console.log(listaCompras.print())

//produtos higiene/limpeza -> final
listaCompras.insertBack("Sabão em pó")
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("Água Sanitária")
console.log(listaCompras.print())

listaCompras.insertFront("Café")
listaCompras.insertFront("Açúcar")
console.log(listaCompras.print())