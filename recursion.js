/*
let factorial = function fac(num) {
    if (num === 1) {
        // base case
        return 1;
    }
    // recursive case
    return num * fac(num - 1);
};

const final = factorial(5);
//console.log(final);

/**************************************
 * Ilustrating Recursion with factorial
 *      5 * fac(4)
 *      5 * 4 * fac(3)
 *      5 * 4 * 3 * fac(2)
 *      5 * 4 * 3 * 2 * fac(1)
 *      5 * 4 * 3 * 2 * 1 ( <-- multiplying backwards)
 *      5 * 4 * 3 * 2
 *      5 * 4 * 6
 *      5 * 24 = 120 (result)
 * 
 * Using the Google Dev tools (debugger) you can easily see all the process. When the functions are stacking and, after reaching the end, unstacking.
 


function countDown(num) {
    // base case
    if (num <= 0) {
        console.log('All done!');
        return;
    }
    console.log(num);

    // recursive case
    num--;
    countDown(num);
}

countDown(4);
*/

// The Collatz Conjecture Exercise

function collatz(n) {
    count = 0;

    if (n === 1) {
        return 0;
    } else if (n % 2 === 0) {
        return count = 1 + collatz(n/2);
    } else {
        return count = 1 + collatz(3*n + 1);
    }
}

console.log(collatz(3));