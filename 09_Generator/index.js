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
            
            if (!next.done) {
                if (next.value instanceof Promise) {
                    next.value.then(
                        res => {
                            result.push(res);
                            execute(iterator, res);
                        },
                        rej => {
                            result.push(rej);
                            execute(iterator, rej);
                        }
                    );
                } else if (typeof next.value === 'function') {
                    result.push(next.value());
                    execute(iterator,next.value());
                } else {
                    result.push(next.value);
                    execute(iterator, next.value);
                }
            } else {
                resolve(result);
            }
        }
        
        execute(iterator);
    })
}

runner(gen()).then(data => console.log(data.pop() === '441,2,3,4' ? "Good Job" : "You are fail this task"))