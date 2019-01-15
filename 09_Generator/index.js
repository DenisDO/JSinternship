function sum(a, b) {
  return a + b;
}

let prom = new Promise((res, rej) => {
  setTimeout(rej, 5000, 888);
});

let val = 555;
let val2 = 777;

function* gen() {
    const b = yield prom;
    const c = yield val;
    const a = yield () => sum(333, 333);
    const d = yield val2;
}

let iterator = gen();

function runner(iterator) {

    const result = [];

    return new Promise(resolve => {

        function execute(iterator, yieldValue) {

            let next = iterator.next(yieldValue);
        
            if (!next.done) {
                if (next.value instanceof Promise) {
                    next.value.then(
                        res => {
                            result.push(res);
                            execute(iterator, res);
                        },
                        rej => {
                            result.push(rej);
                            // iterator.throw(err);
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

runner(iterator).then(data => {console.log(data);});