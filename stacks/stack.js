class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // Busca el ultimo elemento ingresado
    peek() {
        return this.top;
    }

    // Inserta un nuevo elemento al final
    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;
        return this;       
    }

    // Elimina el ultimo elemento
    pop(){
        if(!this.top){
            return undefined;
        }
        const deleted = this.top.value;
        
        if(this.length === 1){
            this.top = null;
            this.bottom = null;
        }else{
            const holdingPointer = this.top.next;
            this.top = holdingPointer;
        }
        
        this.length--;
        return deleted;
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
console.log(myStack.peek());
console.log(myStack.pop());