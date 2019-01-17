function sum() {
    console.log(1);
    return [].reduce.call(arguments, (acc, el) => acc+=el);
}

const prom = x => new Promise(res => {
    console.log(2);
    setTimeout(res,2000,x);
})

function pow() {
    console.log(3);
    return [].reduce.call(arguments, (acc, el) => acc*=el);
}

const arr = [1,2,3,4]

function *gen() {
    const a = yield sum.bind(null, ...arr);
    const b = yield prom(a);
    const c = yield pow.bind(null, ...arr);
    const d = yield arr;
    console.log(a + b + c + d)
    yield a + b + c + d;
}
  
  
function runner(iterator) {
    const result = [];

    return new Promise(resolve => {
        function execute(iterator, yieldValue) {
            const next = iterator.next(yieldValue);
            const {done, value} = next;

            if(done) {
                return resolve(result);
            }
            
            if (value instanceof Promise) {
                value.then(
                    res => {
                        result.push(res);
                        execute(iterator, res);
                    },
                    rej => {
                        result.push(rej);
                        execute(iterator, rej);
                    }
                );
            } else if (typeof value === 'function') {
                const cbResult = value()
                result.push(cbResult);
                execute(iterator, cbResult);
            } else {
                result.push(value);
                execute(iterator, value);
            }
        }
        
        execute(iterator);
    })
}

runner(gen()).then(data => console.log(data.pop() === '441,2,3,4' ? "Good Job" : "You are fail this task"))