# JavaScript Fundamentals

## Recursion

Recursion is a technique where you break a problem into a small repeatable part and then you repeat that small part in order to solve the larger problem.

- A recursive function calls itself
- A recursive function has two main parts, they are:

    1. Base case (terminating condition);
    2. Recursive case;

- It is very effective when manipulating tree structures such as XML, DOM, Objects composed of other objects, etc.

    ```javascript
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
    ```

### Ilustrating Recursion with factorial

    5 * factorial(4)
    5 * 4 * factorial(3)
    5 * 4 * 3 * factorial(2)
    5 * 4 * 3 * 2 * factorial(1)
    5 * 4 * 3 * 2 * 1 ( <-- multiplying backwards)
    5 * 4 * 3 * 2
    5 * 4 * 6
    5 * 24 = 120 (result)

TIP: Using the Google Dev tools (debugger) you can easily see all the process. When the functions are stacking and, after reaching the end, unstacking.

# Closures

## What is a closure?

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

The closure has three scope chains:

- it has access to its own scope — variables defined between its curly brackets
- it has access to the outer function’s variables
- it has access to the global variables

Simplified definition:
"...when you have a function defined inside another function the inner function has access to the variables and scope of the outer function, even if the outer function finishes executing and those variables are no longer acessible outside that function." (https://www.youtube.com/watch?v=3a0I8ICR1Vg)

```javascript
function outer() {
    let a = 10;
    function inner() {
        let b = 20;
        return a + b;
    }

    return inner();
}

console.log(outer());
```

The result for the program above (closures3.js) will be '30'. Notice that even with the variable 'a' being declared outside the scope of the inner function this one has access to its value. That only is possible due to the 'closures' in JavaScript.

The inner function can access the variables of the enclosing function due to closures in JavaScript. In other words, the inner function preserves the scope chain of the enclosing function at the time the enclosing function was executed, and thus can access the enclosing function’s variables.

Using ```console.dir(functionName)``` you can open the Inspect element in Google Chrome and go to the Console. You can expand the element to actually see the Closure element (shown in the third to last line below). Notice that the value of b=10 is preserved in the Closure even after the outer() function completes its execution.

```javascript
function outer() {
var b = 10;
var c = 100;
   function inner() {
         var a = 20;
         console.log("a= " + a + " b= " + b);
         a++;
         b++;
    }
   return inner;
}
var X = outer();  // outer() invoked the first time
var Y = outer();  // outer() invoked the second time
//end of outer() function executions
X(); // X() invoked the first time
X(); // X() invoked the second time
X(); // X() invoked the third time
Y(); // Y() invoked the first time
```

When you run this code, you will see the following output in the console.log:

a=20 b=10
a=20 b=11
a=20 b=12
a=20 b=10
