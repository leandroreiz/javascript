/**
 * Functions
 */

/*
A function is a JavaScript procedure — a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it. They are a way of automate repetitive tasks in a program and this is a very basic principle of software development aimed at reducing repetition of information, also known as DRY that stands for "Don't Repeat Yourself". */

//Syntax
function name(arguments) {
    //code here
}

// Declaring a function to calculate the age of someone
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

// Function declarations just perform actions and DO NOT produce immediate results. You need to invoke (call) a function to be executed so you can obtain a result from it. See bellow:

ageLeandro = calculateAge(1983);
ageChelem = calculateAge(1986);
ageNina = calculateAge(2015);
console.log(ageLeandro, ageChelem, ageNina);

// JavaScript expressions are pieces of code that always produce a value, it doesn't matter how long they are as long as the code results in a single value, then we have an expression.

var x = function (a, b) {return a * b}; // this is a function expression

// After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

//Function Expression VS. Function Statement
//Example: Function Expression
try {
    alert(foo()); // ERROR! foo wasn't loaded yet
    var foo = function() { return 5; }
} catch(e) {
    alert(e);
}

//Example: Function Declaration
alert(fooo()); 
function fooo() { return 'The Function Declaration (fooo) is loaded before any code can run, so the code succeed.'; }

// Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.

// Similar to the var statement, function declarations are hoisted to the top of other code. Function expressions aren’t hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.

/*
Benefits of Function Expressions

There are several different ways that function expressions become more useful than function declarations.

- As closures
- As arguments to other functions
- As Immediately Invoked Function Expressions (IIFE)
*/
