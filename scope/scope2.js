// scope === variable access
// context === this keyword
// scope !== context

// parent scope
var a = 1; // root scope or window Object

function foo() {
    // child scope surrounded by {}
    var b = 2;
    console.log(a); // has access to 'a' as it was defined in its parent scope
}

foo();
// console.log(b);
// the code above results in 'ReferenceError' as 'b' is defined inside a child scope

// -------------------------------------------

var x = 10;

function bar() {
    var x = 11; // scope conflict. We have lost access to outer 'a'...
    console.log(x);
    console.log(window.x); // ...unless we access using its parent scope
}

bar(); 