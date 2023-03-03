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

    // Busca y retorna el dato buscado
    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(50);
console.log(myHashTable);
myHashTable.set('Diego', 2002);
myHashTable.set('Maria', 2006);
myHashTable.set('Samuel', 1995);
console.log(myHashTable.get('Diego'));
console.log(myHashTable.get('Maria'));
console.log(myHashTable.get('Samuel'));
console.log(myHashTable.data);