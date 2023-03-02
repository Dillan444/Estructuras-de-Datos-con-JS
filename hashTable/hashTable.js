class HashTable {

    // Inicializa un atributo con un tamaño definido
    constructor(size) {
        this.data = new Array(size);
    }

    // Crea un codigo(hash) como dirección(address) de un dato
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }   

    // Inseta un nuevo dato con clave valor 
    set(key, value) {
        const address = this.hashMethod(key);
        if(!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value]);
        return this.data;
    }
}

const myHashTable = new HashTable(50);
console.log(myHashTable);
myHashTable.set('Diego', 2002);
myHashTable.set('Maria', 2006);
console.log(myHashTable.set('Samuel', 1995));