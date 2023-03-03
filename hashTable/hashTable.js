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
    
    // Elimina el elemento la llave(key) pasado como parametro
    delete(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    const bucket = this.data[address][i];
                    delete this.data[address][i];
                    this.shiftIndex(i, address);

                    if(!this.data[address].length){
                        delete this.data[address];
                    }
                    return bucket;
                }
            }
        }
        return undefined;
    }

    // Realiza el cambio de indice(index) de los elemento posteriores al elemento a eliminar
    shiftIndex(index, address) {
        for(let i  = index; i < this.data[address].length - 1; i++) {
            this.data[address][i] = this.data[address][i + 1];
        }
        delete this.data[address][this.data[address].length - 1];
        this.data[address].length--;
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
console.log(myHashTable.delete('Maria'));
console.log(myHashTable.data);