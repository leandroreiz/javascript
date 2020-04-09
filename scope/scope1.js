// The variable 'a' is declared here on the top and set as 'undefined'. This happens due to what we known in javaScript as hoisting. All the variables and functions are first declared on the top of your code and only later, where you specified in your code, the values are set. That's the reason we need to take care when using function expressions, once they are set into a variable. The variable will be created at the top of your code, but only later the value, in this case a function, will be set to it.

var a; // declare the variable under the hood
var f;
{
    {
        var a = 1;
        var f = function () {
            // code
        };
    }
}

// This doesn't happen when using let to declare your variable. The let and const are block scoped, that means that they have their declarations only inside that specific block.

a; // ReferenceError: a is not defined
{
    {
        let a = 1;
        console.log(a); // logs '1' into the console
    }
}

// The lexical environment for functions are created when the function is invoked/executed and not when it is defined. 

function f(a, b, c) {
    // has access to the function arguments (a, b, c)
    a = 1;
    b = 2;
    c = a + b;
    return c;
}

f(); // here is where the lexical environment will be created

// Another example:

let x = 'global environment';
{
    x = 'first environment';
    {
        x = 'second environment'
        console.log(x); // second environment
    }
}

// a) when 'console.log' is executed it looks for 'x' on its environment and in this case the value for 'x' is found and it's 'second environment'.

let x = 'global environment';
{
    x = 'first environment';
    {
        console.log(x); // first environment
    }
}

// b) 'console.log' is executed and it looks for 'x' and can't find it on its environment, so it moves up to the next environment and find 'x' with the value 'first environment' that is logged into console.

let x = 'global environment';
{
    {
        console.log(x); // global environment
    }
}

// c) in this last case the 'x' variable is not found in any scoped environment but in the global instead. The variable then is logged into console as 'global environment'.

// So we can understand that JavaScript will always look for variables inside the scope/environment where it was defined and, if it isn't found there, then it will move up to all other scopes till it reach the global scope. If the variable is not found a 'ReferenceError' will be throw.

// IMPORTANT OBSERVATION:

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
