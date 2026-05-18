class Node {
    constructor(val) {
        this.prev = null 
        this.data = val
        this.next = null
    }
}

export default class DoublyLinkedList {
    #head
    #tail
    #count

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    get isEmpty() {
        return this.#count === 0
    }

    get count() {
        return this.#count
    }

    // metodo privado que encontra um nodo por sua posição
    #findNode(pos) {
        let node
        if(pos < this.#count / 2) {
            node = this.#head
            for(let i = 0; i < pos; i++) {
                node = node.next
            }
        }else {
            node = this.#tail
            for(let i = this.#count - 1; i > pos; i--) {
                node = node.prev
            } 
        }
        return node
    }
    
    insert(pos, val) {
        let insertd = new Node(val)

        // 1° caso: lista vazia
        if(this.isEmpty) {
            this.#head = insertd
            this.#tail = insertd
        }

        // 2° caso: inserção na primeira posição
        else if(pos === 0) {
            insertd.next = this.#head
            this.#head.prev = insertd
            this.#head = insertd
        }

        // 3° caso: inserção na ultima posição
        else if(pos >= this.#count) {
            insertd.prev = this.#tail
            this.#tail.next = insertd
            this.#tail = insertd
        }

        // 4° caso: inserção em posição intermediaria   
        else {
            let nodePos = this.#findNode(pos)

            let before = nodePos.prev

            before.next = insertd
            insertd.prev = before
            insertd.next = nodePos
            nodePos = insertd
        }
        this.#count++
    }
    insertHead(val) {
        this.insert(0, val)
    }

    insertTail(val) {
        this.insert(this.#count, val)
    }
    
    remove(pos) {
        // 1° caso lista vazia ou fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined
        
        let removed

        // 2° caso remoção do primeiro nodo
        if(pos === 0) {
            removed = this.#head
            this.#head = removed.next
            if(this.#head) this.#head.prev = null 
            if(this.#count === 1) this.#tail = null
        }

        // 3° caso remoção do ultimo nodo
        else if(pos === this.#count -1) {
            removed = this.#tail
            this.#tail = removed.prev

            if(this.#tail) this.#tail.next = null

            if(this.#count === 1) this.#head = null 
        }

        // 4° caso remoção em posição intermediaria
        else {
            removed = this.#findNode(pos)
            let before = removed.prev
            let after = removed.next

            before.next = after
            after.prev = before
        }
        this.#count--
        return removed.data
    }
    removeHead() {
        return this.remove(0)
    }

    removeTail() {
        return this.remove(this.#count - 1)
    }

    peek(pos) {
        // lista vazia ou posição fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined
        const node = this.#findNode(pos)
        return node.data 
    }

    peekHead() {
        return this.peek(0)
    }

    peekTail() {
        return this.peek(this.#count - 1)
    }

    // método que retorna a posição do nodo cujo conteudo foi especificado
    indexOf(val) {
        const middle = Math.ceil(this.#count / 2)
        let node1 = this.#head
        let node2 = this.#tail

        for(let pos = 0; pos < middle; pos++) {
            if(val === node1.data) return pos
            if(val === node2.data) return this.#count - 1 - pos
            node1 = node1.next
            node2 = node2.prev
        }
        return -1
    }
    
    print() {
        let output = '( '
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
            if(output !== '( ') output += ', '
            output += `[${i}: ${node.data}]`
            node = node.next
        }
        output += ` ), count: ${this.#count}`
        return output
    }
}
