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
}

const myArray = new MyArray();       //Instancia de la clase(MyArray)
console.log(myArray.push("Luis"));   //Insertar elemento luis
console.log(myArray.push("Andres")); //Insertar elemento Andres
console.log(myArray.get(1));         //Obtener el elemento en la posición 1
console.log(myArray.length);
