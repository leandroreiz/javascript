# JavaScript Fundamentals

## Conditionals

### Basic 'if ... else ... else if' syntax

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

=== and !== — test if one value is identical to, or not identical to, another.
< and >     — test if one value is less than or greater than another.
<= and >=   — test if one value is less than or equal to, or greater than or equal to, another.

#### Logical operators: AND, OR and NOT

If you want to test multiple conditions without writing nested if...else statements, logical operators can help you. When used in conditions, the first two do the following:

&& — AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.
|| — OR; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.

### switch statements

if...else statements do the job of enabling conditional code well, but they are not without their downsides. They are mainly good for cases where you've got a couple of choices, and each one requires a reasonable amount of code to be run, and/or the conditions are complex (for example, multiple logical operators). For cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition, the syntax can be a bit cumbersome, especially if you've got a large number of choices.

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

for statement
do...while statement
while statement
labeled statement
continue statement
break statement
for...in statement
for...of statement

### for statement

(Loops1.js)

A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

A for statement looks as follows:

```javascript
for ([initialExpression]; [condition]; [incrementExpression]) statement;
```

### do...while statement

(Loops2.js)

The do...while statement repeats until a specified condition evaluates to false.

A do...while statement looks as follows:

```javascript
do statement;
while (condition);
```

### while statement

(Loops3.js)

A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

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

The continue statement can be used to restart a while, do-while, for, or label statement.

When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.

When you use continue with a label, it applies to the looping statement identified with that label.
The syntax of the continue statement looks like the following:

```javascript
continue [label];
```

### break statement

(Loops5.js)

Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

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

The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:

```javascript
for (variable in object) statement;
```

### for...of statement (Loops7.js)

The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

```javascript
for (variable of object) statement;
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

```
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

1. Variable `b` is created anew and is set to `10`
2. Variable `c` is created anew.

Note that even though `outer()` was executed once before variables `b` and `c` ceased to exist, once the function completed execution they are created as brand new variables.

Let us call these `b(second_time)` and `c(second_time)` for our own reference.

3. The inner function is returned and assigned to `Y`

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

The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string. (Alternatively, it can return something completely different, as described in one of the following examples.) 

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
