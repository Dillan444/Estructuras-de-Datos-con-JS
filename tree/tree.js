class Node{
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinatySearchTree {
    constructor() {
        this.root = null;
    }

    // Inserta un nuevo valor en un nodo
    insert(value) {
        const newNode = new Node(value);

        if(!this.root) {
            this.root = newNode;
        }else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) { //Izquierda
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left

                }else { // Derecha
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    search(value){
        if(!this.root) {
            return null;
        }
        let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) { //Izquierda
                    if(!currentNode.left){
                        return "Dato no existe";
                    }else if(currentNode.value === value){
                        return currentNode;
                    }
                    currentNode = currentNode.left

                }else { // Derecha
                    if(!currentNode.right) {
                        return "Dato no existe";
                    }else if(currentNode.value === value){
                        return currentNode;
                    }
                    currentNode = currentNode.right;
                }
            }

    }

}

const myTree = new BinatySearchTree();

myTree.insert(10);
  myTree.insert(4);
    myTree.insert(2);
    myTree.insert(8);
  myTree.insert(20);
    myTree.insert(17);
    myTree.insert(20);

console.log(myTree);
console.log(myTree.search(20));