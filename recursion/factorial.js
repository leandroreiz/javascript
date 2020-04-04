/*  A recursive function calls itself.
    A recursive function has two main parts.
        a) a terminating condition (base case).
        b) recursive case. */

function factorial(num) {
    // base case
    if (num === 1) {
        return 1;
    }

    // recursive case
    return num * factorial(num - 1);
};

const final = factorial(5);
console.log(final);

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
 */
