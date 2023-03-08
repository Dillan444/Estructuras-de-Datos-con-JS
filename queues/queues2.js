class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first.value;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    
        return this;
    }

    dequeue(){
        if(!this.length){
            return undefined;
        }
        const deleted = this.first.value;

        if(this.length === 1){
            this.first = null;
            this.last = null;

        }else {
            const newFsit = this.last.value;
            const newLast = this.last.next;
            this.first.value = newFsit;
            this.last = newLast;
        }

        this.length--;
        return deleted;

    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue);