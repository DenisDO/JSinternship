class MyObj {
    constructor(number) {
        this.number = number;
    }

    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'string':
              return `${this.number}`;
      
            case 'number':
              return this.number;
      
            default:          
              return this.number > 0 ? true : false;
        }
    }
};

let newObj = new MyObj(111);
