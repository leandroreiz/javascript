// source: https://www.youtube.com/watch?v=NIq3qLaHCIs

// declaring arrays
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = [0, 1, 2, 3, 4, 5];

// getting the first two elements of an array the old way
// const a = alphabet[0]
// const b = alphabet[1]

// destructuring the 2 first elements of the array
[x, y] = alphabet;
console.log(x);     // A
console.log(y);     // B

// destructuring the first and the third element of the array
[x, , y] = alphabet;
console.log(x);     // A
console.log(y);     // C

// destructuring the whole array using the spread operator
[x, , y, ...rest] = alphabet;
console.log(x);     // A
console.log(y);     // C
console.log(rest);  // ["D", "E", "F"]

// yet another example on how to use destructuring with arrays
function sumAndMultiply(a, b) {
    return [a+b, a*b]
}

const array = sumAndMultiply(3, 4);
console.log(array);     // [7, 12]

// using destructuring with functions
[sum, multiply] = sumAndMultiply(3, 4);
console.log(sum);       // 7
console.log(multiply);  // 12

// setting default values while destructuring
[sum, multiply, subtraction = 'no subtraction', division = 'no division'] = sumAndMultiply(2, 3);
console.log(sum);           // 5
console.log(multiply);      // 6
console.log(subtraction);   // no subtraction
console.log(division);      // no division

function basicMathOp(a, b) {
    return [a+b, a*b, a-b, a/b];
}

[sum, multiply, subtraction = 'no subtraction', division = 'no division'] = basicMathOp(4, 4);
console.log(sum);           // 8
console.log(multiply);      // 16
console.log(subtraction);   // 0
console.log(division);      // 1
