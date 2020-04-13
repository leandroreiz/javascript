// named functions
function sum(a, b) {
    return a + b;
}

function isPositive(number) {
    return number >= 0;
}

function randomNumber() {
    return Math.random;
}

// anonymous function
document.addEventListener('click', function() {
    console.log('Click');
})

// Now the same functions but using arrow functions

// In the example below we can remove the curly braces once we have only one line of code and all that is after the arrow will be returned as result of the function
let arrowSum = (a, b) => a + b;

// When we have a function with a single parameter we can also remove the parentheses and the arrow function will still work 
let arrowIsPositive = number => number >= 0;

// In this case we don't have a parameter for the function, so we need to inform an openning and a closing parentheses before the arrow sign to indicates that this is an arrow function
let arrowRandomNumber = () => Math.random;

// calling an arrow function instead of an anonymous function
document.addEventListener('click', () => console.log('Click'));

// What really makes arrow functions important is the fact that they redefine the 'this' keyword inside of them, differently from the normal functions.

class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ', this.name);
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ', this.name);
        }, 100)
    }
};

let person = new Person('Leandro');
person.printNameArrow();    // Leandro
person.printNameFunction(); // Nothing is logged into the console

// This happens because the normal function redefines the 'this' to the global scope and the arrow function doesn't redefine the 'this' keyword, leaving it referencing the scope where it was previously defined.

console.log(this.name);     // As the 'printNameFunction', nothing is logged into the console because 'this.name' is not defined in the global scope (window object).
