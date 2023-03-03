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
}

let mySinglyLinkedLinst = new MySinglyLinkedLinst(1);