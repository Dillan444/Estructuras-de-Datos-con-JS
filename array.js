// const array = ['Diilan', 'Karol', 'Lorena'];
// array.push("Ana");
// console.log(array);

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
}

const myArray = new MyArray();
console.log(myArray.push("Luis"));
console.log(myArray.push("Andres"));
console.log(myArray.get(1));