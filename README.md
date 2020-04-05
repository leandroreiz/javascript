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

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

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

### What is a closure?

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

The closure has three scope chains:

- it has access to its own scope — variables defined between its curly brackets
- it has access to the outer function’s variables
- it has access to the global variables

Simplified definition:
"...when you have a function defined inside another function, the inner function has access to the variables and scope of the outer function, even if the outer function finishes executing and those variables are no longer acessible outside that function." (https://www.youtube.com/watch?v=3a0I8ICR1Vg)

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

```
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
