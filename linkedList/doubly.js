class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedLinst {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }

        this.tail = this.head;

        this.length = 1
    }
    
    // Agrega un nuevo elemento al final(tail)
    append(value) {
        const newNodo = new Node(value);
        newNodo.prev = this.tail;

        this.tail.next = newNodo;
        this.tail = newNodo;
        this.length++;

        return this;
    }

    // Agrega un nuevo valor al principio(head)
    prepend(value) {
        const newNodo = new Node(value);

        newNodo.next = this.head;
        this.head = newNodo;
        this.length++;

        return this;
    }

}

let myDoublyLinkedLinst = new MyDoublyLinkedLinst(1);
console.log(myDoublyLinkedLinst);
myDoublyLinkedLinst.append(2)
console.log(myDoublyLinkedLinst.tail);
myDoublyLinkedLinst.append(3)
console.log(myDoublyLinkedLinst.tail.prev.prev);