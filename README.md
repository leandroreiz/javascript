# JavaScript Fundamentals

## Conditionals

### Basic 'if...else if...else' syntax

Basic if...else syntax looks like the following in pseudocode:

```javascript
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
```

#### A note on comparison operators

Comparison operators are used to test the conditions inside our conditional statements. We first looked at comparison operators back in our Basic math in JavaScript — numbers and operators article. Our choices are:

```===``` and ```!==``` test if one value is identical to, or not identical to, another.
```<``` and ```>``` test if one value is less than or greater than another.
```<=``` and ```>=``` test if one value is less than or equal to, or greater than or equal to, another.

#### Logical operators: AND, OR and NOT

If you want to test multiple conditions without writing nested if...else statements, logical operators can help you. When used in conditions, the first two do the following:

```&&``` and ```AND``` allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.
```||``` and ```OR``` allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.

### switch statements

```if...else``` statements do the job of enabling conditional code well, but they are not without their downsides. They are mainly good for cases where you've got a couple of choices, and each one requires a reasonable amount of code to be run, and/or the conditions are complex (for example, multiple logical operators). For cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition, the syntax can be a bit cumbersome, especially if you've got a large number of choices.

In such a case, switch statements are your friend — they take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it. Here's some more pseudocode, to give you an idea:

```javascript
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;
  
  // include as many cases as you like

  default:
    actually, just run this code
}
```

### Ternary operator

There is one final bit of syntax we want to introduce you to before we get you to play with some examples. The ternary or conditional operator is a small bit of syntax that tests a condition and returns one value/expression if it is true, and another if it is false — this can be useful in some situations, and can take up a lot less code than an if...else block if you simply have two choices that are chosen between via a true/false condition. The pseudocode looks like this:

```javascript
( condition ) ? run this code : run this code instead
```

So let's look at a simple example:

```javascript
let greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';
```

## Loops and iteration

Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration>

Loops offer a quick and easy way to do something repeatedly.

The statements for loops provided in JavaScript are:

```for``` statement
```do...while``` statement
```while``` statement
labeled statement
```continue``` statement
```break``` statement
```for...in``` statement
```for...of``` statement

### for statement

(Loops1.js)

A ```for``` loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

A ```for``` statement looks as follows:

```javascript
for ([initialExpression]; [condition]; [incrementExpression]) statement;
```

### do...while statement

(Loops2.js)

The ```do...while``` statement repeats until a specified condition evaluates to false.

A ```do...while``` statement looks as follows:

```javascript
do statement;
while (condition);
```

### while statement

(Loops3.js)

A ```while``` statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

```javascript
while (condition) statement;
```

### labeled statement

(Loops4.js and Loops5.js)

A label provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a label to identify a loop, and then use the break or continue statements to indicate whether a program should interrupt the loop or continue its execution.

The syntax of the labeled statement looks like the following:

```javascript
label: statement;
```

The value of label may be any JavaScript identifier that is not a reserved word. The statement that you identify with a label may be any statement.

### continue statement

(Loops4.js)

The ```continue``` statement can be used to restart a while, do-while, for, or label statement.

When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.

When you use continue with a label, it applies to the looping statement identified with that label.
The syntax of the continue statement looks like the following:

```javascript
continue [label];
```

### break statement

(Loops5.js)

Use the ```break``` statement to terminate a loop, switch, or in conjunction with a labeled statement.

When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.

When you use break with a label, it terminates the specified labeled statement.
The syntax of the break statement looks like this:

```javascript
break;
break [label];
```

1. The first form of the syntax terminates the innermost enclosing loop or switch.

2. The second form of the syntax terminates the specified enclosing labeled statement.

### for...in statement

(Loops6.js)

The ```for...in``` statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:

```javascript
for (variable in object) statement;
```

### for...of statement (Loops7.js)

The ```for...of``` statement creates a loop iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

```javascript
for (variable of object) statement;
```

## String Methods

```javascript
let stringOne = 'freeCodeCamp is the best place to learn';
let stringTwo = 'frontend and backend development';

// startsWith()
// search at the start of the string and return true or false if the value was found
console.log(stringOne.startsWith('free'));

// endsWith()
// search at the end of the string and return true or false if the value was found
console.log(stringOne.endsWith('learn'));

// includes()
// search through the string and return true or false if the value was found
console.log(stringOne.includes('best'));

// charAt()
// returns the character at the specified position
console.log(stringOne.charAt(0));

// charCodeAt
// return the char code at the specified position
console.log(stringOne.charCodeAt(0));

// concat()
// concatenete two strings
console.log(stringOne.concat(stringTwo));

// fromCharCode()
// return the char correspondent to the code informed
console.log(String.fromCharCode(102));

// indexOf()
// return the index where the expression informed starts (first occurrence)
console.log(stringTwo.indexOf('end'));

// lastIndexOf()
// return the index where the expression informed starts (last occurrence)
console.log(stringTwo.lastIndexOf('end'));

// match() - for more info check regular expressions
// create an array with all the occurrences where the regular expression informed was found
console.log(stringTwo.match(/end/g));

// repeat()
// repeat the string 'x' times
console.log(stringOne.repeat(2));

// replace()
// replace the regular expression with the value informed in the second parameter
// obs.: using a string as the first parameter will replace only the first occurrence
console.log(stringTwo.replace(/end/g, 'END'));

// search()
// return the index where the first occurrence was found
console.log(stringTwo.search('end'));

// slice()
// return a substring starting at the first parameter and finishing before the second parameter
// in the example below the indexes returned would be 2 and 3. 4 is not included.
console.log(stringOne.slice(2, 4));

// split()
// return an array with 'x' elements based on the separator informed as a parameter
console.log(stringTwo.split(' '));

// substr()
// return a substring starting at the first index informed and with the length informed in the second parameter
console.log(stringOne.substr(2, 4));

// substring()
// similar to slice()
console.log(stringOne.substring(2, 4));

// toLowerCase()
console.log(stringOne.toLowerCase());

// toUpperCase()
console.log(stringTwo.toUpperCase());

// trim()
// removes white spaces at the beggining and at the end of a string
let stringThree = '     JavaScript!     ';
console.log(stringThree.trim());
```

## Arrays

An array is an ordered collection of data (either primitive or object depending upon the language). Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value.

Each item in an array has a number attached to it, called a numeric index, that allows you to access it. In JavaScript, arrays start at index zero and can be manipulated with various methods.

```javascript
// Declaring a new array
let names = ['Chelem', 'Nina', 'Andre', 'Leonardo', 'Luiza', 'Guilherme'];
let years = new Array(1986, 2015, 1986, 1975, 1946, 1949);

// Printing the Array object
console.log(names);

// Retrieving data from arrays
console.log(names[0]);

// Inserting data using position
names[2] = 'Bobby';
names[10] = 'Lobo'; // notice here that the slots from 6 to 9 will be empty
names[names.length] = 'Lucky'; // inserting data at the end

// Iterating through an array
for (let i = 0; i < names.length; i++) {
    console.log('Name: ' + names[i]);
}

// Different data types
let leandro = ['Leandro', 'Reis', 1983, 'developer', false];
console.log(leandro);

// INSERTING DATA INTO ARRAYS
// at the end of it
leandro.push('blue');
console.log(leandro);

// at the begin of it
leandro.unshift('Mr.');
console.log(leandro);

// DELETING DATA FROM ARRAYS
// removing the last item
leandro.pop();
console.log(leandro);

// removing the first item
leandro.shift();
console.log(leandro);

// Identify the index of an element of the array
console.log('Position of 1983 in the array: ' + leandro.indexOf(1983));

// If the search doesn't find the element the value -1 is returned
console.log(leandro.indexOf('brazilian'));

// another example, now using a ternary operator
let isDesigner = leandro.indexOf('designer') === -1 ? leandro[0] + ' IS NOT a designer. He\'s a ' + leandro[3] + '.' : leandro[0] + ' IS a designer.';
console.log(isDesigner);
```

## Objects

### Objects and properties

The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

```javascript
// Creating a new object with object literal syntax (curly braces)
let leandro = {
    firstName: 'Leandro',
    lastName: 'Fernandes Reis',
    birthYear: 1983,
    family: ['Chelem', 'Nina', 'Nick', 'Lucky'],
    job: 'developer',
    isMarried: true
};

// Printing the object
console.log(leandro);

// We can access the properties using the dot notation...
console.log(leandro.firstName);

// ...or the brackets and also...
console.log(leandro['lastName']);

// ...using a variable.
const birth = 'birthYear';
console.log(leandro[birth]);

// Mutating an object
leandro.job = 'designer';
leandro['isMarried'] = false;
console.log(leandro);

// Crating an object with the new Object syntax
let chelem = new Object();
chelem.firstName = 'Chelem';
chelem['lastName'] = 'Rodrigues Matozinho'
chelem.birthYear = 1986;

console.log(chelem);
```

### Objects and methods

JavaScript methods are actions that can be performed on objects.
A JavaScript method is a property containing a function definition.

```javascript
// Creating a new object
let leandro = {
    firstName: 'Leandro',
    lastName: 'Fernandes Reis',
    birthYear: 1983,
    family: ['Chelem', 'Nina', 'Nick', 'Lucky'],
    job: 'developer',
    isMarried: true,
    // Defining a method is simply associating a function as a property
    calculateAge: function(birthYear) {
        return 2020 - birthYear;
    }
};

console.log(leandro.calculateAge(1983));

// Let's see another example but now using the 'this' keyword
let chelem = new Object();

chelem.firstName = 'Chelem';
chelem.lastName = 'Rodrigues Matozinho';
chelem.birthYear = 1986;
chelem.calculateAge = function() {
    this.age = 2020 - this.birthYear;
}
chelem.calculateAge();
console.log(chelem);
console.log(chelem.age);
```

## Var, let and const

Source: <https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e>

One of the features that came with ES2015 (ES6) is addition of ```let``` and ```const``` which can be used for variable declaration. But what make them different from ```var``` declaration?

In this article, var, let and const will be discussed with respect to their scope, use and hoisting. As you read, take note of the differences between them I'll point out.

### Var

- ```var``` declarations are globally scoped or function/locally scoped.
- ```var``` variables can be re-declared and updated.
- ```var``` variables are hoisted (see hoisting for more) to the top of its scope and initialized with a value of undefined.

#### Problem with var

There's a weakness that comes with ```var```. I'll use the example below to explain this.

```javascript
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead";
}

console.log(greeter) //"say Hello instead"```
```

So, since ```times > 3``` returns true, greeter is redefined to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.
If you have use greeter in other parts of your code, you might be surprised at the output you might get. This might cause a lot of bugs in your code. This is why the let and const is necessary.

### Let

```let``` is preferred for variable declaration now. It's no surprise as it comes as an improvement to the var declarations. It also solves this problem that was raised in the last subheading. Let's consider why this is so.

- ```let``` is block scoped, a block is a chunk of code bounded by {}.
- ```let``` can be updated but not re-declared.

This fact makes ```let``` a better choice than ```var```. When using ```let```, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope. Also, since a variable cannot be declared more than once within a scope, then the problem discussed earlier that occurs with var does not occur.

- ```let``` declarations are hoisted, just like ```var```, to the top. Unlike var which is initialized as ```undefined```, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

### Const

Variables declared with the ```const``` maintain constant values. ```const``` declarations share some similarities with ```let``` declarations.

- ```const``` cannot be updated or re-declared.
Every ```const``` declaration therefore, must be initialized at the time of declaration. This behavior is somehow different when it comes to objects declared with ```const```. While a ```const``` object cannot be updated, the properties of this objects can be updated.

- Just like ```let```, ```const``` declarations are hoisted to the top but are not initialized.

#### So just in case, you missed the differences, here they are

1. ```var``` declarations are globally scoped or function scoped while ```let``` and ```const``` are block scoped.

2. ```var``` variables can be updated and re-declared within its scope; ```let``` variables can be updated but not re-declared; ```const``` variables can neither be updated nor re-declared.

3. They are all hoisted to the top of their scope but while ```var``` variables are initialized with undefined, ```let``` and ```const``` variables are not initialized.

4. While ```var``` and ```let``` can be declared without being initialized, ```const``` must be initialized during declaration.

## Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. What this means is that if we do this:

```javascript
console.log (greeter);
var greeter = "say hello";
```

it is interpreted as this

```javascript
var greeter;
console.log(greeter); //greeter is undefined
greeter = "say hello";
```

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
  }

  const final = factorial(5);
  console.log(final);
  ```

### Ilustrating Recursion with factorial

```javascript
5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1 ( <-- multiplying backwards)
5 * 4 * 3 * 2
5 * 4 * 6
5 * 24 = 120 (result)
```

TIP: Using the Google Dev tools (debugger) you can easily see all the process. When the functions are stacking and, after reaching the end, unstacking.

## Closures

### What is a closure

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

The closure has three scope chains:

- it has access to its own scope — variables defined between its curly brackets
- it has access to the outer function’s variables
- it has access to the global variables

Simplified definition:
"...when you have a function defined inside another function, the inner function has access to the variables and scope of the outer function, even if the outer function finishes executing and those variables are no longer acessible outside that function." (<https://www.youtube.com/watch?v=3a0I8ICR1Vg>)

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

Using `console.dir(functionName)` you can open the Inspect element in Google Chrome and go to the Console. You can expand the element to actually see the Closure element (shown in the third to last line below). Notice that the value of b=10 is preserved in the Closure even after the outer() function completes its execution.

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
var X = outer(); // outer() invoked the first time
var Y = outer(); // outer() invoked the second time
//end of outer() function executions

X(); // X() invoked the first time
X(); // X() invoked the second time
X(); // X() invoked the third time
Y(); // Y() invoked the first time
X(); // X() invoked the fourth time
```

When you run this code, you will see the following output in the console.log:

```javascript
a=20 b=10
a=20 b=11
a=20 b=12
a=20 b=10
```

Let’s examine this code step-by-step to see what exactly is happening and to see closures in Action!

```javascript
var X = outer(); // outer() invoked the first time
```

The function `outer()` is invoked the first time. The following steps take place:

1. Variable `b` is created, and is set to `10`
2. Variable `c` is created, and set to `100`
   Let’s call this `b(first_time)` and `c(first_time)` for our own reference.

3. The inner function is returned and assigned to `X`

At this point, the variable `b` is enclosed within the inner function scope chain as a closure with `b=10`, since inner uses the variable `b`. The outer function completes execution, and all its variables cease to exist. The variable `c` no longer exists, although the variable `b` exists as a closure within inner.

```javascript
var Y = outer(); // outer() invoked the second time
```

1.Variable `b` is created anew and is set to `10`
2.Variable `c` is created anew.

Note that even though `outer()` was executed once before variables `b` and `c` ceased to exist, once the function completed execution they are created as brand new variables.

Let us call these `b(second_time)` and `c(second_time)` for our own reference.

3.The inner function is returned and assigned to `Y`

At this point the variable b is enclosed within the inner function scope chain as a closure with `b(second_time)=10`, since inner uses the variable `b`. The outer function completes execution, and all its variables cease to exist.

The variable `c(second_time)` no longer exists, although the variable `b(second_time)` exists as closure within inner.

Now let’s see what happens when the following lines of code are executed:

```javascript
X(); // X() invoked the first time
X(); // X() invoked the second time
X(); // X() invoked the third time
Y(); // Y() invoked the first time
X(); // X() invoked the fourth time
```

When `X()` is invoked the first time, the variable `a` is created and set to `20`, the value of `b` is from the closure value - b(first_time) - so `b=10`. The variables `a` and `b` are incremented by 1. The function `X()` completes execution and all its inner variables — variable a — cease to exist. However, b(first_time) was preserved as the closure, so b(first_time) continues to exist.

When `X()` is invoked the second time, the variable `a` is created anew, and set to 20. Any previous value of variable `a` no longer exists, since it ceased to exist when `X()` completed execution the first time. The value of `b` is taken from the closure value — b(first_time). Also note that we had incremented the value of `b` by 1 from the previous execution, so `b` now is equals to 11. Variables `a` and `b` are incremented by 1 again. The function `X()` completes execution and all its inner variables — variable a — cease to exist. However, b(first_time) is preserved as the closure continues to exist.

When `X()` is invoked the third time, the variable `a` is created anew, and set to 20. Any previous value of variable `a` no longer exists, since it ceased to exist when `X()` completed execution the first time. The value of `b` is taken from the closure value — b(first_time). Also note that we had incremented the value of `b` by 1 from the previous execution, so `b` now is equals to 12. Variables `a` and `b` are incremented by 1 again. The function `X()` completes execution, and all its inner variables — variable a — cease to exist. However, b(first_time) is preserved as the closure continues to exist.

When `Y()` is invoked the first time, the variable `a` is created anew, and set to 20. The value of `b` is from the closure value — b(second_time), so b is equals 10. Variables `a` and `b` are incremented by 1. The function `Y()` completes execution, and all its inner variables — variable a — cease to exist. However, b(second_time) was preserved as the closure, so b(second_time) continues to exist.

If you go beyond and invoke the function `X()` a fourth time, you'll notice that the value returned for `b` will be 12 (13 after incrementing it by 1). That happens because the variable `b` stills within the `X()` scope.

## Template Literals (Template Strings)

Template literals (formerly known as template strings) are string literals that allow for embedded expressions. We typically use them to express strings spanning multiple lines or for string interpolation, which essentially allows us to create a template with one or more placeholders for inserting variable text at a later time.

While traditional strings are wrapped in single or double quotes, template literals are wrapped in backtick (\`) characters. A template literal can contain placeholders, which are preceded by a dollar sign ($) and wrapped in curly braces ({}). For example, in the template literal `${expression}`, the  text between the placeholders is passed to a function. The default function simply concatenates the template literal's parts into a single string.

Any time we see an expression preceding a template literal, we call the expression a tag and the template string a tagged template literal. In these instances, we call the tag expression (typically a function) with the processed template literal, which we can then manipulate before outputting the final string.

```javascript
// multi-line strings
// normal strings
console.log("first line\n" + "second line");
console.log("first line" + "\nsecond line");
console.log("first line\nsecond line");

// template literals
console.log(`first line
second line`);

const a = 2;
const b = 3;

// expression Interpolation
// normal strings
console.log(
    'The sum of a and b is ' + (a + b) + '.\n'
    + 'The product of a and b is ' + (a * b) + '.'
);

console.log(`The sum of a and b is ${a + b}.
The product of a and b is ${a * b}.`);
```

A more advanced form of template literals are tagged templates.

Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.

The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string. (Alternatively, it can return something completely different, as described in one of the following examples)

The name of the function used for the tag can be whatever you want.

```javascript
let person = 'Leandro';
let age = 28;

function myTag(strings, personExp, ageExp) {
    let str0 = strings[0]; // "That "
    let str1 = strings[1]; // " is a "

    // There is technically a string after the final expression (in our example), but it is empty (""), so disregard.
    // var str2 = string[2];

    let ageStr;
    if (ageExp > 99) {
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    // we can even return a string built using a template literal
    return `${str0}${personExp}${str1}${ageStr}.`;
}

// "That " and " is a " are strings passed as parameters and the placeholders are passed as parameters aswell
let output = myTag`That ${person} is a ${age}`;

console.log(output);
```

## Functions

A function is a JavaScript procedure — a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it. They are a way of automate repetitive tasks in a program and this is a very basic principle of software development aimed at reducing repetition of information, also known as DRY that stands for "Don't Repeat Yourself".

### Function Declarations

```javascript
//Syntax
function name(arguments) {
    //code here
}

//Declaring a function to calculate the age of someone
function calculateAge(birthYear) {
    return 2020 - birthYear;
}
```

Function declarations just perform actions and DO NOT produce immediate results. You need to invoke (call) a function to be executed so you can obtain a result from it. See bellow:

```javascript
ageLeandro = calculateAge(1983);
ageChelem = calculateAge(1986);
ageNina = calculateAge(2015);
console.log(ageLeandro, ageChelem, ageNina);
```

### Function Expressions

JavaScript expressions are pieces of code that always produce a value, it doesn't matter how long they are as long as the code results in a single value, then we have an expression.

```javascript
var x = function (a, b) {return a * b}; // this is a function expression
```

After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

#### Function Expression VS. Function Statement

```javascript
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
```

Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.

Similar to the var statement, function declarations are hoisted to the top of other code. Function expressions aren’t hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.

#### Benefits of Function Expressions

There are several different ways that function expressions become more useful than function declarations.

- As closures
- As arguments to other functions
- As Immediately Invoked Function Expressions (IIFE)

### IIFE

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```javascript
(function () {
    statements
})();
```

It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

Examples:

The function becomes a function expression which is immediately executed. The variable within the expression can not be accessed from outside it.

```javascript
(function () {
    var aName = "Barry";
})();
// Variable aName is not accessible from the outside scope
aName // throws "Uncaught ReferenceError: aName is not defined"
```

Assigning the IIFE to a variable stores the function's return value, not the function definition itself.

```javascript
var result = (function () {
    var name = "Barry";
    return name;
})();
// Immediately creates the output:
result; // "Barry"
```

## Exception handling statements

You can throw exceptions using the throw statement and handle them using the try...catch statements.

```javascript
throw statement
try...catch statement
```

### throw statement

Use the throw statement to throw an exception. A throw statement specifies the value to be thrown:

```javascript
throw expression;
```

You may throw any expression, not just expressions of a specific type. The following code throws several exceptions of varying types:

```javascript
throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };
```

Note: You can specify an object when you throw an exception. You can then reference the object's properties in the catch block.

```javascript
// Create an object type UserException
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}

// Make the exception convert to a pretty string when used as a string
// (e.g., by the error console)
UserException.prototype.toString = function() {
    return `${this.name}: "${this.message}"`;
}

// Create an instance of the object type and throw it
throw new UserException('Value too high');
```

### try...catch statement

The ```try...catch``` statement marks a block of statements to try, and specifies one or more responses should an exception be thrown. If an exception is thrown, the ```try...catch``` statement catches it.

The ```try...catch``` statement consists of a ```try``` block, which contains one or more statements, and a catch block, containing statements that specify what to do if an exception is thrown in the ```try``` block.

In other words, you want the ```try``` block to succeed—but if it does not, you want control to pass to the ```catch``` block. If any statement within the ```try``` block (or in a function called from within the ``try`` block) throws an exception, control immediately shifts to the ```catch``` block. If no exception is thrown in the ``try`` block, the ```catch``` block is skipped. The finally block executes after the ``try`` and ```catch``` blocks execute but before the statements following the ```try...catch``` statement.

The following example uses a ```try...catch``` statement. The example calls a function that retrieves a month name from an array based on the value passed to the function. If the value does not correspond to a month number (1–12), an exception is thrown with the value ```"InvalidMonthNo"``` and the statements in the ```catch``` block set the ```monthName``` variable to ```'unknown'```.

```javascript
function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo]) {
        return months[mo];
    } else {
        throw 'InvalidMonthNo'; // throw keyword is used here
    }
}

try { // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
}
catch(e) {
    monthName = 'unknown';
    logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}

function logMyErrors(message) {
    console.log(message);
}
```

### The catch block

You can use a catch block to handle all exceptions that may be generated in the try block.

```javascript
catch (catchID) {
  statements
}
```

The ```catch``` block specifies an identifier (catchID in the preceding syntax) that holds the value specified by the ```throw``` statement. You can use this identifier to get information about the exception that was thrown.

JavaScript creates this identifier when the ```catch``` block is entered. The identifier lasts only for the duration of the ```catch``` block. Once the ```catch``` block finishes executing, the identifier no longer exists.

For example, the following code throws an exception. When the exception occurs, control transfers to the ```catch``` block.

```javascript
try {
  throw 'myException'; // generates an exception
}
catch (err) {
  // statements to handle any exceptions
  logMyErrors(err);    // pass exception object to error handler
}
```

Best practice: When logging errors to the console inside a ```catch``` block, using ```console.error()``` rather than ```console.log()``` is advised for debugging. It formats the message as an error, and adds it to the list of error messages generated by the page.

### The finally block

The ```finally``` block contains statements to be executed after the ```try``` and ```catch``` blocks execute. Additionally, the ```finally``` block executes before the code that follows the ```try…catch…finally``` statement.

It is also important to note that the ```finally``` block will execute whether or not an exception is thrown. If an exception is thrown, however, the statements in the ```finally``` block execute even if no ```catch``` block handles the exception that was thrown.

You can use the ```finally``` block to make your script fail gracefully when an exception occurs. For example, you may need to release a resource that your script has tied up.

The following example opens a file and then executes statements that use the file. (Server-side JavaScript allows you to access files.) If an exception is thrown while the file is open, the ```finally``` block closes the file before the script fails. Using ```finally``` here ensures that the file is never left open, even if an error occurs.

```javascript
openMyFile();
try {
    writeMyFile(theData); // This may throw an error
} catch(e) {  
    handleError(e); // If an error occurred, handle it
} finally {
    closeMyFile(); // Always close the resource
}
```

If the ```finally``` block returns a value, this value becomes the return value of the entire ```try…catch…finally``` production, regardless of any return statements in the ```try``` and ```catch``` blocks:

```javascript
function f() {
    try {
        console.log(0);
        throw 'bogus';
    } catch(e) {
        console.log(1);
        return true;    // this return statement is suspended
                        // until finally block has completed
        console.log(2); // not reachable
    } finally {
        console.log(3);
        return false;   // overwrites the previous "return"
        console.log(4); // not reachable
    }
    // "return false" is executed now
    console.log(5);     // not reachable
}
console.log(f());       // 0, 1, 3, false
```

Overwriting of return values by the ```finally``` block also applies to exceptions thrown or re-thrown inside of the ```catch``` block:

```javascript
function f() {
    try {
        throw 'bogus';
    } catch(e) {
        console.log('caught inner "bogus"');
        throw e;    // this throw statement is suspended until
                    // finally block has completed
    } finally {
        return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
}

try {
    console.log(f());
} catch(e) {
    // this is never reached!
    // while f() executes, the 'finally' block returns false,
    // which overwrites the 'throw' inside the above 'catch'
    console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
// false

```

### Nesting try...catch statements

You can nest one or more ```try...catch``` statements.

If an inner ```try...catch``` statement does not have a ```catch``` block:

1. it must contain a ```finally``` block, and
2. the enclosing ```try...catch``` statement's ```catch``` block is checked for a match.

For more information, see nested try-blocks on the try...catch reference page here <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#Nested_try-blocks>.

## Lexical Environment (Scope)

The variable ```a``` is declared on the top of your code and set as ```undefined```. This happens due to what we known in javaScript as hoisting. All the variables and functions are first declared on the top of your code and only later, where you specified in your code, the values are set. That's the reason we need to take care when using function expressions, once they are set into a variable. The variable will be created at the top of your code, but only later the value, in this case a function, will be set to it.

```javascript
//var a;
//var f; // javascript declares the variable and function under the hood - you can't see this
{
    {
        var a = 1;
        var f = function () {
            // code
        };
    }
}
```

This doesn't happen when using let to declare your variable. The let and const are block scoped, that means that they have their declarations only inside that specific block.

```javascript
a; // ReferenceError: a is not defined
{
    {
        let a = 1;
        console.log(a); // logs '1' into the console
    }
}
```

The lexical environment for functions are created when the function is invoked/executed and not when it is defined.

```javascript
function f(a, b, c) {
    // has access to the function arguments (a, b, c)
    a = 1;
    b = 2;
    c = a + b;
    return c;
}

f(); // here is where the lexical environment will be created
```

Another example:

```javascript
let x = 'global environment';
{
    x = 'first environment';
    {
        x = 'second environment'
        console.log(x); // second environment
    }
}
```

a) when 'console.log' is executed it looks for 'x' on its environment and in this case the value for 'x' is found and it's 'second environment'.

```javascript
let x = 'global environment';
{
    x = 'first environment';
    {
        console.log(x); // first environment
    }
}
```

b) 'console.log' is executed and it looks for 'x' and can't find it on its environment, so it moves up to the next environment and find 'x' with the value 'first environment' that is logged into console.

```javascript
let x = 'global environment';
{
    {
        console.log(x); // global environment
    }
}
```

c) in this last case the 'x' variable is not found in any scoped environment but in the global instead. The variable then is logged into console as 'global environment'.

So we can understand that JavaScript will always look for variables inside the scope/environment where it was defined and, if it isn't found there, then it will move up to all other scopes till it reach the global scope. If the variable is not found a 'ReferenceError' will be throw.

IMPORTANT OBSERVATION:

```javascript
for (var i = 0; i < 3; i++) { // using var
    setTimeout(() => {
        console.log(i);
    }, 1000);
} // this will log the number '3' three times

for (let i = 0; i < 3; i++) { // using let
    setTimeout(() => {
        console.log(i);
    }, 1000);
} // this will log the numbers 0, 1 and 2
```

## this keyword

### "...the keyword 'this' references the object that is executing the current function." - Mosh from Programming with Mosh YouTube channel

source: <https://www.youtube.com/watch?v=gvicrj31JOM>

```javascript
// method -> obj
// function -> global (window, global)

const video = {
    title: 'title a',
    play() {
        console.log(this);
    }
};

video.stop = function () {
    console.log(this);
}

video.play();   // the video obj will be printed as result
video.stop();   // once again the video obj will be seen on the console
                // this happens because 'stop' and 'play' are methods in the video object

function playVideo() {
    console.log(this);
}

playVideo();    // this will log the 'window' object on the console
                // What if this is a constructor function? Let's see bellow:

function Video(title) {
    this.title = title;
}

const v = new Video('title b');     // this will log the object 'Video' on the console
                                    // this happens because when we're using the 'new' keyword a new empty object is created and the 'this.title' is assigned to it.

const video = {
    title: 'title',
    tags: ['tag a', 'tag b', 'tag c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
        // we need to define the keyword 'this' as a parameter for the 'forEach' method to have access to the video object. This occurs because the function declared inside the 'forEach' is a simple function and not a method, so the 'this keyword' will point to the global scope.
    }
};

video.showTags();
```

## Spread Operator

source: <https://www.notion.so/The-Spread-Operator-b7608512fbd844ec9f27f31740fb7298>

Basically, there are three places you can use spread:

1. In function calls
2. In array literals
3. In object literals

### Spread & Function Calls

```javascript
const arrNumbers = [25,70,15,32,65,98];
const arrStrings = ['Chelem', 'Nina', 'Nick'];
const str = 'BANANAS';

result = Math.min(arrNumbers);
console.log(result);            // NaN

result = Math.min(...arrNumbers);
console.log(result);            // 15

console.log(arrStrings);        // logs the array object
console.log(...arrStrings);     // Chelem Nina Nick
```

### Spread & Array Literals

```javascript
const parents = ['Guilherme', 'Luiza'];
const kids = ['Leonardo', 'Leandro', 'Andre'];
// family = [parents, kids]     // this creates a nested array
family = [...parents, ...kids]; // combines the arrays spread into one
console.log(family);

const pets = ['Tony', 'Nina'];

family = [...parents, ...kids, "My wife Chelem", ...pets, "Marileia & Helio"];
console.log(family);            // you can combine arrays and new values

// Copying an array

const originals = ['Mona Lisa', 'American Gothic', 'The School of Athens'];
const copiesPtr = originals;    // this creates a POINTER to the 'originals' array
copiesPtr.push("Nighthawks");   // so if we change the copies array...
console.log(originals);         // ...the originals will also be changed.

const copies = [...originals];  // using the spread operator does not create a pointer, but a real copy of 'originals' in this case
copies.push("The Night Watch"); // adding a new item here...
console.log(copies);
console.log(originals);         // ...does not affect the 'originals' array
```

#### IMPORTANT: Spread only goes "one Level" deep when copying an array. It does not perform a deep copy of nested array

```javascript
const gameBoard = [['O', 'O'], ['O', 'O'], ['O', 'O']];
console.log(gameBoard);
const boardCopy = [...gameBoard];
console.log(boardCopy);
boardCopy[0][1] = 'X';

// Both now look like this:
// [['O', 'X'], ['O', 'O'], ['O', 'O']]
```

### Spread & Object Literals

Just like in arrays, we can use spread to combine existing objects:

```javascript
const mainColors = {brightRed: '#e55039', waterfallBlue: '#38ada9'};
const accentColors = {lightGrey: '#778ca3', swanWhite: '#f7f1e3'};

const fullPalette = {...mainColors, ...accentColors};
console.log(fullPalette);

// Another example:

const lion = {hasTail: true, legs: 4};
const eagle = {canFly: true};

const hybrid = {name: 'Gryphon', ...lion, ...eagle};
console.log(hybrid);
```

### Spread & Immutability

In frameworks like React, it's important not to mutate specific data (the state, specifically). Because of the way React is written, updating arrays & objects directly in the state can cause issues where your app does not render or re-render when it should. You'll often see spread used in this context.

Here's a simples example of what NOT to do. We have an array of todos, and we want to add a new todo to the end of that array. The "easy" way is to simply push on to todos, BUT THAT MUTATES THE ARRAY!

```javascript
const todos = [
    {user: 'Brick', completed: false, task: 'Upload Video'},
    {user: 'Lilith', completed: true, task: 'Rob Bank'}
]

function addTodo(newTodo) {
    todos.push(newTodo);
}
```

Rather than mutating the todos array directly, we should intead make a copy of the todos array that also contains the newTodo added at the end. Spread makes this relatively easy:

```javascript
const todos = [
    {user: 'Brick', completed: false, task: 'Upload Video'},
    {user: 'Lilith', completed: true, task: 'Rob Bank'}
]

function addTodo(newTodo) {
    return [...todos, {...newTodo, completed: false}]
}

const newTodos = addTodo({user: 'Mordecai', task: 'Feed Bloodwing'});
console.log(todos);
console.log(newTodos);
```

## Destructuring assignment

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

### Destructuring Arrays

```javascript
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

// Using destructuring with functions
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

```

### Destructuring Objects

```javascript
const personOne = {
    name: 'Leandro',
    age: 36,
    address: {
        city: 'Miami',
        state: 'Florida'
    }
}

const personTwo = {
    name: 'Chelem',
    age: 34,
    address: {
        city: 'Los Angeles',
        county: 'California'
    }
}

const personThree = {
    age: 70,
    address: {
        city: 'Belo Horizonte',
        county: 'Minas Gerais'
    }
}

const personFour = {
    name: 'Nina',
    age: 5,
    address: {
        city: 'Belo Horizonte',
        county: 'Minas Gerais'
    },
    favouriteFood: 'Banana'
}

// destructuring objects works pretty similar to arrays
// you can define a variable name (name: firstName) or use the keys present at the object (age)
const { name: firstName, age } = personOne;
console.log(firstName);     // Leandro
console.log(age);           // 36

// using the spread operator
const { name: firstName2, ...rest } = personTwo;
console.log(firstName2);    // Chelem
console.log(rest);          // {age: 34, address {...}}

// setting a default value
const { name: firstName3 = 'Not Inserted', age: age3 } = personThree;
console.log(firstName3);    // Not Inserted
console.log(age3);          // 70

// destructuring nested objects
const { name: firstName4, address: { city } } = personFour;
console.log(firstName4);    // Nina
console.log(city);          // Belo Horizonte

// combining objects
const personFive = {
    age: 25,
    favoriteFood: 'Pizza'
}

// combining personOne and personFive using destructuring and spread operator
// notice that everything in personFive overwrites what is in personOne
const personSix = { ...personOne, ...personFive };
console.log(personSix);     // {name: "Leandro", age: 25, address: {…}, favoriteFood: "Pizza"}

// declaring a function to print user details
function printUser(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

printUser(personOne);       // Name: Leandro, Age: 36

// using destructuring with functions to get specific data from object
function printUserName({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printUserName(personOne);   // Name: Leandro, Age: 36

// setting a default value as a parameter
function printFavoriteFood({ favouriteFood = 'Lasagna'}) {
    console.log(`My favourite food is ${favouriteFood}`);
}

// don't have the key/value informed
printFavoriteFood(personOne);   // My favourite food is Lasagna
// has the favouriteFood set to 'Banana'
printFavoriteFood(personFour);  // My favourite food is Banana
```

## Arrow Functions

sources:
<https://www.youtube.com/watch?v=h33Srr5J9nY>
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>

An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.

See the functions below:

```javascript
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
```

Now the same functions but using arrow functions

In the example below we can remove the curly braces once we have only one line of code and all that is after the arrow will be returned as result of the function.

```javascript
let arrowSum = (a, b) => a + b;
```

When we have a function with a single parameter we can also remove the parentheses and the arrow function will still work.

``` javascript
let arrowIsPositive = number => number >= 0;
```

In this case we don't have a parameter for the function, so we need to inform an openning and a closing parentheses before the arrow sign to indicates that this is an arrow function.

```javascript
let arrowRandomNumber = () => Math.random;
```

Calling an arrow function instead of an anonymous function:

```javascript
document.addEventListener('click', () => console.log('Click'));
```

But what really makes arrow functions important is the fact that they redefine the 'this' keyword inside of them, differently from the normal functions.

```javascript
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
```

This happens because the normal function redefines the 'this' to the global scope and the arrow function doesn't redefine the 'this' keyword, leaving it referencing the scope where it was previously defined.

```javascript
console.log(this.name);
```

As the 'printNameFunction', nothing is logged into the console because 'this.name' is not defined in the global scope (window object).

## JavaScript Higher Order Functions & Arrays

source: <https://www.youtube.com/watch?v=rRgD1yVwIvE>

```javascript
const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
```

### forEach

```javascript
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

companies.forEach(function(company) {
    console.log(company.name);
});
```

### filter

```javascript
// Get elements with age over 21

//using for loop
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}

// using filter
const canDrinkFilter = ages.filter(function(age) {
    if (age >= 21) {
        return true;
    }
});

console.log(canDrinkFilter);

// using filter & arrow functions
const canDrinkArrow = ages.filter(age => age >= 21);
console.log(canDrinkArrow);

// Filter retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// Get all companies that started during the 80's
const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
console.log(eightiesCompanies);

// Get companies that lasted at least 10 years
const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10);
console.log(lastedTenYears);
```

### map

```javascript
// Create an array of company names
const companyNames = companies.map(company => company.name);
console.log(companyNames);

// Create an array with company names and start and end dates
const companyNamesDates = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyNamesDates);

// Calculate the square root for all ages
const agesSqrt = ages.map(age => Math.sqrt(age));
console.log(agesSqrt);

// you can even use two maps
const agesDoubleMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

console.log(agesDoubleMap);
```

### sort

The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

```javascript
// Sort companies by start year
const sortedCompanies = companies.sort(function(a, b) {
    if (a.start > b.start) {
        return 1;
    } else {
        return -1;
    }
});

console.log(sortedCompanies);

const sortedCompaniesArrow = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);
console.log(sortedCompaniesArrow);

// Log into the console the ages array sorted
console.log(ages.sort()); // this won't work properly since it checks only the first number

// To solve the problem above we need to do as follows
console.log(ages.sort((a, b) => a - b));

// Now in decrescent order
console.log(ages.sort((a, b) => b - a));

// Another examples
listOfHotels = [
    {name: 'powerscourt', stars: 5, rating: 4.1, distanceFromCityCentre: 5000},
    {name: 'moldron', stars: 3, rating: 3.7, distanceFromCityCentre: 2000},
    {name: 'ibis', stars: 4, rating: 4.0, distanceFromCityCentre: 3000},
    {name: 'hilton', stars: 5, rating: 4.7, distanceFromCityCentre: 1500},
    {name: 'charlemont', stars: 2, rating: 4.2, distanceFromCityCentre: 7500},
    {name: 'portobelo', stars: 4, rating: 3.5, distanceFromCityCentre: 500}
];

// sorting an array of objects
// by the rating of the hotel
function sortByRating(a, b) {
    if (a.rating > b.rating) {
        return 1;
    } else if (a.rating < b.rating) {
        return -1;
    } else {
        return 0;
    }
}

// sorting numbers
const increasingOrder = [...listOfHotels].sort(sortByRating);
const decreasingOrder = [...listOfHotels].sort((a, b) => a.rating - b.rating).reverse();

// sorting strings by the name of the hotel
// these lines of code won't work
// const sortByName = [...listOfHotels].sort();
// sortByName = [...listOfHotels].sort((a, b) => a.name - b.name);

function sortByName(a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
}

sortByName = [...listOfHotels].sort(sortByName);

// printing the results
console.log(listOfHotels);
console.log(increasingOrder);
console.log(decreasingOrder);
console.log(sortByName);
```

### reduce

```javascript
// Sum all ages in the ages array
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}
console.log(ageSum);

// Now using reduce
const ageSumReduce = ages.reduce((total, age) => total + age, 0); // the 'zero' here is the starting value for total
console.log(ageSumReduce);

// Get total years for all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

// Combine Methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a- b)
    .reduce((total, age) => total + age, 0)

console.log(combined);
```

## Functional Classes

### Using Functions

1. Define a normal JavaScript function.
2. Create an object by using the new keyword.
3. Define properties and methods for a created object using the this keyword.

```javascript
function Fruit(type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = getFruitInformation;
}

function getFruitInformation() {
    return `This ${this.type} is ${this.color}.`;
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());

// we can also define the getInformation function internally

function FruitInnerFunction(type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = () => `This ${this.type} is ${this.color}.`;
}

let papaya = new FruitInnerFunction('Brazilian papaya');
papaya.color = 'yellow';
console.log(papaya.getInformation());
```

### The Prototype Property

The drawback of internally defining the getInformation function is that it recreates that function every time we create a new Fruit object. Fortunatelly, every function in JavaScript has something called a prototype property, which is empty by default. We can think of a function's prototype as an object blueprint or paradigm; when we add methods and properties to the prototype, they are accessible to all instances od that function. This is especially useful for inheritance (discussed below).

We can add a function to our constructor function's prototype like so:

```javascript
function FruitPrototype(type) {
    this.type = type;
    this.color = 'unknown';
}

FruitPrototype.prototype.getInformation = function () {
    return `This ${this.type} is ${this.color}.`;
}

let plum = new FruitPrototype('Spanish plum');
plum.color = 'bright yellow';
console.log(plum.getInformation());
```

### Using Object Literals

We can use object literals to define an object's properties and functions by initializing a variable with a comma-separated list of property-value pairs enclosed in curly braces.

```javascript
let apple = {
    type: 'Chilean apple',
    color: 'red',
    getInformation: function() {
        return `This ${this.type} is ${this.color}.`;
    }
}

console.log(apple.getInformation());

apple.color = 'dark red';
console.log(apple.getInformation());
```

### Singleton Class Using a Function

A singleton class is a design pattern that restricts a class to a single instance. When we assign the value of 'new function() {...}' to a variable, the following happens:

1. We define an anonymous constructor function.
2. We invoke the anonymous constructor function with the 'new' keyword.

```javascript
let strawberry = new function() {
    this.type = 'Irish strawberry';
    this.color = 'pink-ish';
    this.getInformation = function() {
        return `This ${this.type} is ${this.color}.`;
    };
}

console.log(strawberry.getInformation());
strawberry.color = 'red';
console.log(strawberry.getInformation());
```

## Classes

JavaScript classes, introduced in ECMAScript 6, are essentially syntactic sugar over JavaScript's existing prototype-based inheritance that don't actually introduce a new object-oriented inheritance model. This syntax is a means of more simply and clearly creating objects and deal with inheritance.

We define classes in two ways:

### Class Declarations

One way to define a class is using a class declaration. To declare a class, we use the class keyword and follow it the class' name. Ideally, we always write class names in TitleCase.

```javascript
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let poly = new Polygon(1, 2);
console.log('Polygon p:', poly);
```

An important difference between function declarations and class declarations is that function declarations are hoisted (i.e., can be referenced before they're declared) but class declarations are not. This means we must first declare our class before attempting to access (or reference) it; if we fail to do so, our code throws a ReferenceError.

```javascript
try {
    let polyError = new PolygonError(1, 2);
    console.log('Polygon p:', polyError);
}
catch (exception) {
    console.log(`${exception.name} : ${exception.message} `);
}

class PolygonError {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
```

### Class Expressions

Class expressions are another way to define a class, and they can be either named or unnamed. The name given to a named class expression is local to the class' body.

```javascript
// Unnamed Class Expression
let PolygonUnnamed = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

console.log('Polygon:', PolygonUnnamed);
let unnamed = new PolygonUnnamed(1, 2);
console.log('unnamed:', unnamed);

// Named Class Expression
let PolygonNamed = class PolygonNamed {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

console.log('Polygon:', PolygonNamed);
let named = new PolygonNamed(1, 2);
console.log('named:', named);
```

### The Constructor Method

- The constructor method is a special method we use to create and initialize objects of a class.

- A class can only have one special method with the name constructor, and attempting to write a class containing more than one constructor method will throw a SyntaxError.

- To implement inheritance, we can use the super keyword in a constructor to call a parent class constructor.

```javascript
// Prototype Methods
class PolygonPrototyped {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
};

const square = new PolygonPrototyped(10, 10);
console.log(square.getArea());
```

### Static Methods

Static methods are methods relevant to all instances of a class - not just any one instance. These methods receive information from their arguments and now a class instance, which allows us to invoke a class' static methods without creating an instance of the class. In fact, we actually can't call a static method on an instantiated class object (attempiting to do so throws a TypeError).

We define a class' static methods using the static keyword. We typically use these methods to create utility functions for applications, as they can't be called on class objects.

```javascript
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
};

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// The correct way to call a static method
console.log(Point.distance(p1, p2));

// Attempt to call a static method on an instance of the class
try {
    console.log(p1.distance(p1, p2));
}
catch (exception) {
    console.log(`${exception.name} : ${exception.message}`);
}
```

### Inheritance

In essence, this construct allows us to create an object prototype or class that's an extension of another object prototype or class. A class inheriting from some other class (referred to as a superclass or parent class) is called a subclass (or child class). The subclass inherits the superclass' methods and behaviors, but it can also declare new ones or even override existing ones.

#### Subclassing with the extends Keyword

We use the extends keyword in class declarations or class expressions to create a child class (i.e., subclass).

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
};

class Dog extends Animal {
    speak() {
        console.log(this.name, 'barks.');
    }
}

let nina = new Dog('Nina');
nina.speak();

nina = new Animal('Nina');
nina.speak();

// We can also extend functional classes

function AnimalFunction(name) {
    this.name = name;
}

AnimalFunction.prototype.speak = function() {
    console.log(this.name, 'speaks.');
}

class Cat extends AnimalFunction {
    speak() {
        console.log(this.name, 'meows.')
    }
};

let tony = new Cat('Tony');
tony.speak();

tony = new AnimalFunction('Tony');
tony.speak();
```

#### Superclass Calls Using the super Keyword

We use the super keyword to call functions on an object's parent.

```javascript
class AnimalSuper {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
};

class Pig extends AnimalSuper {
    speak() {
        super.speak();
        console.log(this.name, 'squeaks.');
    }
}

let peter = new Pig('Peter');
peter.speak();
```

#### Extending an Object

The ability to extend multiple classes from the same superclass (or model multiple object types after the same prototype) is powerful because it provides us with certain implied guarantees about the basic functionality of the subclasses; as extensions of the parent class, subclasses are guaranteed to (at minimum) have the superclass' fields, methods, and functions.

Example:
In this example, we call the superclass constructor using super(), override a superclass function (speak()), add an additional property (collarColor), and add a new subclass method (collar()).

```javascript
class AnimalFinal {
    constructor(name) {
        this.animalType = 'animal';
        this.name = name;
    }
    type() {
        console.log(this.name, 'is type', this.animalType);
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dolphin extends AnimalFinal {
    constructor(name, collarColor) {
        super(name);
        this.animalType = 'dolphin';
        this.collarColor = collarColor;
    }
    speak() {
        console.log(this.name, 'whistles.');
    }
    collar() {
        console.log(this.name, 'has a', this.collarColor, 'collar.');
    }
}

let flipper = new Dolphin('Flipper', 'blue');
flipper.type();
flipper.speak();
flipper.collar();

// Because the AnimalFinal constructor only expects one argument,
// only the first value passed to it is used
wally = new AnimalFinal('Wally', 'white');
wally.type();
wally.speak();
try {
    wally.collar()
}
catch (exception) {
    console.log(`${exception.name} : ${exception.message} (collar is a method of Dolphin, not AnimalFinal).`);
}
```

## AJAX & JSON

**AJAX**, stands for **A**synchronous **J**avaScript **A**nd **X**ML, is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows web pages and, by extension, web applications, to change content dynamically without the need to reload the entire page. In practice, modern implementations commonly utilize JSON instead of XML.

**JSON**, stands for **J**ava**S**cript **O**bject **N**otation, is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects *consisting of attribute–value pairs (Objects in JavaScript) and array data types (or any other serializable value)*.

JSON example file:

```json
[
    {
        "name": "Meowsy",
        "species": "cat",
        "foods": {
            "likes": [
                "tuna",
                "catnip"
            ],
            "dislikes": [
                "ham",
                "zucchini"
            ]
        }
    },
    {
        "name": "Barky",
        "species": "dog",
        "foods": {
            "likes": [
                "bones",
                "carrots"
            ],
            "dislikes": [
                "tuna"
            ]
        }
    }
]
```

Using **XMLHttpRequest (XHR)** objects to interact with servers, makes possible to retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. XMLHttpRequest is used heavily in AJAX programming.

**Constructor:**

```XMLHttpRequest()```
The constructor initializes an XMLHttpRequest. It must be called before any other method calls.

**Properties:**

```XMLHttpRequest.responseText``` - Read only
Returns a DOMString that contains the response to the request as text, or null if the request was unsuccessful or has not yet been sent.

```XMLHttpRequest.status``` - Read only
Returns an unsigned short with the status of the response of the request.

**Methods:**

```XMLHttpRequest.open()```
Initializes a request.

```XMLHttpRequest.send()```
Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.

To read more about XHR go to: <https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest>

```javascript
myRequest = new XMLHttpRequest();
myRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
myRequest.onload = () => {
    if (myRequest.status >= 200 && myRequest.status < 400) {
        let myData = JSON.parse(myRequest.responseText);
        renderHTML(myData);
    } else {
        console.log('We connected to the server, but it returned an error.');
    }
}
myRequest.send();
```

## Regular expressions

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), search(), and split() methods of String. This chapter describes JavaScript regular expressions.

### Creating a regular expression

You construct a regular expression in one of two ways:

Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:

```javascript
let re = /ab+c/;
```

Regular expression literals provide compilation of the regular expression **when the script is loaded**. If the regular expression remains constant, using this can improve performance.

Or calling the constructor function of the RegExp object, as follows:

```javascript
let re = new RegExp('ab+c');
```

Using the constructor function provides **runtime compilation** of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

### Writing a regular expression pattern

A regular expression pattern is composed of simple characters, such as /abc/, or a combination of simple and special characters, such as /ab\*c/ or /Chapter (\d+)\\.\d*/. The last example includes parentheses, which are used as a memory device. The match made with this part of the pattern is remembered for later use, as described in Using groups.

Regular Expressions cheatsheet: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet>

### Using simple patterns

Simple patterns are constructed of characters for which you want to find a direct match. For example, the pattern /abc/ matches character combinations in strings only when the exact sequence "abc" occurs (all characters together and in that order). Such a match would succeed in the strings "Hi, do you know your abc's?" and "The latest airplane designs evolved from slabcraft." In both cases the match is with the substring "abc". There is no match in the string "Grab crab" because while it contains the substring "ab c", it does not contain the exact substring "abc".

### Using special characters

When the search for a match requires something more than a direct match, such as finding one or more b's, or finding white space, you can include special characters in the pattern. For example, to match a single "a" followed by zero or more "b"s followed by "c", you'd use the pattern /ab\*c/ the \* after "b" means "0 or more occurrences of the preceding item." In the string "cbbabbbbcdebc", this pattern will match the substring "abbbbc".

### Escaping

If you need to use any of the special characters literally (actually searching for a "\*", for instance), you must escape it by putting a **backslash** in front of it. For instance, to search for "a" followed by "\*" followed by "b", you'd use /a\\\*b/ — the backslash "escapes" the "\*", making it literal instead of special.

Similarly, if you're writing a regular expression literal and need to match a slash ("/"), you need to escape that (otherwise, it terminates the pattern). For instance, to search for the string "/example/" followed by one or more alphabetic characters, you'd use /\/example\/\[a-z\]+/i—the backslashes before each slash make them literal.

To match a literal backslash, you need to escape the backslash. For instance, to match the string "C:\" where "C" can be any letter, you'd use /\[A-Z\]:\\\/ — the first backslash escapes the one after it, so the expression searches for a single literal backslash.

If using the RegExp constructor with a string literal, remember that the backslash is an escape in string literals, so to use it in the regular expression, you need to escape it at the string literal level. /a\\\*b/ and new RegExp("a\\\*b") create the same expression, which searches for "a" followed by a literal "*" followed by "b".

If escape strings are not already part of your pattern you can add them using String.replace:

```javascript
function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
```

The "g" after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches. It is explained in detail below in Advanced Searching With Flags.

### Using regular expressions in JavaScript

Regular expressions are used with the RegExp methods **test()** and **exec()** and with the String methods **match(), replace(), search(), and split()**.

When you want to know whether a pattern is found in a string, use the test() or search() methods; for more information (but slower execution) use the exec() or match() methods. If you use exec() or match() and if the match succeeds, these methods return an array and update properties of the associated regular expression object and also of the predefined regular expression object, RegExp. If the match fails, the exec() method returns null (which coerces to false).

In the following example, the script uses the exec() method to find a match in a string.

```javascript
var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');
```

If you do not need to access the properties of the regular expression, an alternative way of creating myArray is with this script:

```javascript
var myArray = /d(b+)d/g.exec('cdbbdbsbz'); 
    // similar to "cdbbdbsbz".match(/d(b+)d/g); however, "cdbbdbsbz".match(/d(b+)d/g) outputs Array [ "dbbd" ], while /d(b+)d/g.exec('cdbbdbsbz') outputs Array [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ].
```

For more info access: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions>
