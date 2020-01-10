//Functional Classes

/*
Using Functions

1. Define a normal JavaScript function.
2. Create an object by using the new keyword.
3. Define properties and methods for a created object using the this keyword.

function Fruit(type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = getFruitInformation;
    
    //we could do the function declarion inside the class also
    //this.getInformation = function () {
    //    return `This ${this.type} is ${this.color}.`;
    //}
}

function getFruitInformation() {
    return `This ${this.type} is ${this.color}.`;
}

let lime = new Fruit('Mexican Lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());

The Prototype Property

The drawback of internally defining the getInformation function is that it recreates that function every time we create a new Fruit object. Fortunately, every function in JavaScript has something called a prototype property, which is empty by default. We can think of a function's prototype as an object blueprint or paradigm; when we add methods and properties to the prototype, they are accessible to all instances of that function. This is especially useful for inheritance (discussed below).

We can add a function to our constructor function's prototype like so:


function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
}

Fruit.prototype.getInformation = function() {
    return `This ${this.type} is ${this.color}.`;
}

let lime = new Fruit('Brazilian Lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());

let apple = new Fruit('Argentinian Apple');
apple.color = 'red';
console.log(apple.getInformation());

//Using Object Literals

//We can use object literals to define an object's properties and functions by initializing a variable with a comma-separated list of property-value pairs enclosed in curly braces.


let lime = {
    type: 'Mexican Lime',
    color: 'green',
    getInformation: function() {
        return `This ${this.type} is ${this.color}.`;
    }
}

console.log(lime.getInformation());

lime.color = 'yellow';
console.log(lime.getInformation());

//Singleton Class Using a Function

//A singleton class is a design pattern that restricts a class to a single instance. When we assign the value of new function(){...} to a variable, the following happens:

//We define an anonymous constructor function.
//We invoke the anonymous constructor function with the new keyword.


let lime = new function () {
    this.type = 'Mexican lime';
    this.color = 'green';
    this.getInformation = function() {
        return `This ${this.type} is ${this.color}.`;
    };
}

console.log(lime.getInformation());

lime.color = 'yellow';
console.log(lime.getInformation());


/////////////////////////////////////
// CLASSES /////////////////////////
///////////////////////////////////

JavaScript classes, introduced in ECMAScript 6, are essenctially syntatic sugar over JavaScript's existing prototype-based inheritance that don't actually introduce a new object-oriented inheritance model. This syntax is a means of more simply and clearly creating objects and deal with inheritance.

We define classes in two ways:

Class declarations

One way to define a class is using a class declaration.To declare a class, we use the class keyword and follow it with the class' name. Ideally, we always write class names in TitleCase.


class Polygon {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
}

let p = new Polygon(1, 2);
console.log('Polygon p: ', p);

//An important difference between function declarations and class declarations is that function declarations are hoisted (i.e., can be referenced before they're declared) but class declarations are not. This means we must first declare our class before attempting to access (or reference) it; if we fail to do so, our code throws a ReferenceError.
*/

try {
    let p = new Polygon(1, 2);
    console.log('Polygon p: ', p);
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}