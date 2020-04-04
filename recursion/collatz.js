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
