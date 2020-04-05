//use of break statement with labeled loops and while
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
    console.log('Outer loops: ' + x);
    x++;
    z = 1;
    while (true) {
        console.log('Inner loops: ' + z);
        z++;
        if (z === 10 && x === 10) {
            console.log('End.');
            break labelCancelLoops;
        } else if (z === 10) {
            console.log('---------------');
            break;
        }
    }
}