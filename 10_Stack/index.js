class Stack {
    constructor() {
        this.elements = [];
        this.count = this.elements.length;
    }

    setCount() {
        this.count = this.elements.length;
    }

    push(item) {
        if (typeof item === 'undefined') {
            return;
        }

        this.elements[this.elements.length] = item;
        this.setCount();
    }

    pop() {
        if (this.elements.length === 0) {
            return;
        }

        let element = this.elements[this.elements.length - 1];
        this.elements.length--;
        this.setCount();
        return element;
    }

    peek() {
        if (this.elements.length === 0) {
            return;
        }

        return this.elements[this.elements.length - 1];
    }

    clear() {
        this.elements.length = 0;
        this.setCount();
    }

    clone() {
        const stack = new Stack();

        this.elements.forEach(value => {
            stack.push(value);
        });

        stack.setCount();
        return stack;
    }

    contains(item) {
        if (item === undefined) {
            throw Error('Method argument is not defined');
        }

        for (let i = 0; i < this.elements.length; i++) {
            if (item === this.elements[i]) {
                return true;
            }
        }
        return false;
    }

    toArray() {
        return this.elements.map(value => value);
    }

    copyTo(array, index) {
        if (!(array instanceof Array)) {
            throw new Error(`${array} is not an Array!`);
        }

        if (index < 0) {
            throw new Error('Index must be greater than 0!');
        }

        for (let i = this.elements.length - 1; i >= 0; i--) {
            array[index] = this.elements[i];
            index++;
        }
    }

    isEmpty() {
        return this.count === 0;
    }
}

//Test CONSTRUCTOR
let s = new Stack();
console.log(s);

//Test PUSH
s.push(5);
s.push(10);
s.push(15);
console.log(s);

//Test POP
let s1 = s.pop();
console.log(s);
console.log(s1);

//Test PEEK
let s2 = s.peek();
console.log(s);
console.log(s2);

//Test CLEAR
s.clear();
console.log(s);

//Test PUSH again
s.push(20);
s.push(25);
s.push(30);
console.log(s);

//Test CLONE
let s3 = s.clone();
console.log(s);
console.log(s3);
console.log(s === s3);

//Test CONTAINS
console.log(s.contains(3));
console.log(s.contains(20));

//Test TO_ARRAY
let s4 = s.toArray();
console.log(s);
console.log(s4);
console.log(s === s4.elements);

//Test COPY_TO
let arr = ['Hello', 'World'];
let arr1 = ['Hello', 'World'];
s.copyTo(arr, 1);
console.log(arr);
s.copyTo(arr1, 3);
console.log(arr1);