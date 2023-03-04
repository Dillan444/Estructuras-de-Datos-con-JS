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

    // Inserta un nuevo elemento(value) en la posición(index) indicada
    insert(index, value){
        if(index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++
        return this;
    }

    // Obtiene el elemeto de la posición(index) indicada
    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter != index){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}

let mySinglyLinkedLinst = new MySinglyLinkedLinst(1);
mySinglyLinkedLinst.append(2);
mySinglyLinkedLinst.append(3);
mySinglyLinkedLinst.append(4);
mySinglyLinkedLinst.append(6);
mySinglyLinkedLinst.prepend(0);
mySinglyLinkedLinst.insert(3, 5);
console.log(mySinglyLinkedLinst);