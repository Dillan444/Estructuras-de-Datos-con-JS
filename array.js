// const array = ['Diilan', 'Karol', 'Lorena'];
// array.push("Ana");
// console.log(array);

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Obtiene un elemento en la posición(index) indicada
    get(index) {
        return this.data[index]
    }

    // Incerta un nuevo elemento(item) en la posición del largo del array. Luego se incrementa en uno el largo
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    // Elimina el ultimo elemento de un array
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // Eliminar un elemento en el indice(index) indicado
    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    }

    // Realiza el cambio de indice(index) de los elemento posteriores al elemento a eliminar
    shiftIndex(index) {
        for(let i  = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new MyArray();       //Instancia de la clase(MyArray)
console.log(myArray.push("Luis"));   //Insertar elemento luis
console.log(myArray.push("Andres")); //Insertar elemento Andres
console.log(myArray.push("Jorge"));  //Insertar elemento Jorge
console.log(myArray.get(1));         //Obtener el elemento en la posición 1
console.log(myArray.pop());
console.log(myArray.delete(1));
console.log(myArray.data);
