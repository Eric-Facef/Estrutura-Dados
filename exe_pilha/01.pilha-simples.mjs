/*
    1. Utilizando o arquivo "PILHA" da pasta "lib".
    Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
    e após cada uma das operações a seguir:
    
    push(5)
    push(9)
    pop()
    push(3)
    push(8)
    pop()
    pop()
    push(6)
    push()
    push(2)
    pop()
    push(10)
    push(1)
    pop()
    pop()
    push(15)
    pop()
    pop()
    
*/
push(5) → [5]

push(9) → [5, 9]

pop() → remove 9 → [5]

push(3) → [5, 3]

push(8) → [5, 3, 8]

pop() → remove 8 → [5, 3]

pop() → remove 3 → [5]

push(6) → [5, 6]

push() → adiciona undefined → [5, 6, undefined]

push(2) → [5, 6, undefined, 2]

pop() → remove 2 → [5, 6, undefined]

push(10) → [5, 6, undefined, 10]

push(1) → [5, 6, undefined, 10, 1]

pop() → remove 1 → [5, 6, undefined, 10]

pop() → remove 10 → [5, 6, undefined]

push(15) → [5, 6, undefined, 15]

pop() → remove 15 → [5, 6, undefined]

pop() → remove undefined → [5, 6]
