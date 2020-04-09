const global = 'global';
const anotherGlobal = 'also global'

function fn() {
    const global = 'function scoped';
    console.log(global); // function scoped
    const scoped = 'also function scoped'

    function inner() {
        console.log(scoped); // also function scoped
        console.log(anotherGlobal); // also global
    }

    inner();

}

console.log(global); // global
console.log(anotherGlobal); // also global
//console.log(scoped); // ReferenceError

fn();
//inner(); // ReferenceError
