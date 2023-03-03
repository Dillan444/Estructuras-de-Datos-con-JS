// 1 --> 2 --> 3 --> 4 --> 5 --> null


// Ejemplo estructura de una Singly Linked List
// let singlyLinkedList = {
//     head: {
//         value: 2,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedLinst {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }

        this.tail = this.head;

        this.length = 1
    }
    
    // Agrega un nuevo elemento al final(tail)
    append(value) {
        const newNodo = new Node(value);

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

let mySinglyLinkedLinst = new MySinglyLinkedLinst(1);
mySinglyLinkedLinst.append(2);
mySinglyLinkedLinst.append(3);
mySinglyLinkedLinst.prepend(0);
console.log(mySinglyLinkedLinst);