/*
Functional Classes

Using Functions

1. Define a normal JavaScript function.
2. Create an object by using the new keyword.
3. Define properties and methods for a created object using the this keyword.
*/

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

/*
The Prototype Property

The drawback of internally defining the getInformation function is that it recreates that function every time we create a new Fruit object. Fortunatelly, every function in JavaScript has something called a prototype property, which is empty by default. We can think of a function's prototype as an object blueprint or paradigm; when we add methods and properties to the prototype, they are accessible to all instances od that function. This is especially useful for inheritance (discussed below).

We can add a function to our constructor function's prototype like so:
*/

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

/*
Using Object Literals

We can use object literals to define an object's properties and functions by initializing a variable with a comma-separated list of property-value pairs enclosed in curly braces.
*/

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

/*
Singleton Class Using a Function

A singleton class is a design pattern that restricts a class to a single instance. When we assign the value of 'new function() {...}' to a variable, the following happens:

1. We define an anonymous constructor function.
2. We invoke the anonymous constructor function with the 'new' keyword.
*/

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

/*
Classes

JavaScript classes, introduced in ECMAScript 6, are essentially syntactic sugar over JavaScript's existing prototype-based inheritance that don't actually introduce a new object-oriented inheritance model. This syntax is a means of more simply and clearly creating objects and deal with inheritance.

We define classes in two ways:

Class Declarations

One way to define a class is using a class declaration. To declare a class, we use the class keyword and follow it the class' name. Ideally, we always write class names in TitleCase.
*/

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let poly = new Polygon(1, 2);
console.log('Polygon p:', poly);

/*
An important difference between function declarations and class declarations is that function declarations are hoisted (i.e., can be referenced before they're declared) but class declarations are not. This means we must first declare our class before attempting to access (or reference) it; if we fail to do so, our code throws a ReferenceError.
*/

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

/*
Class Expressions

Class expressions are another way to define a class, and they can be either named or unnamed. The name given to a named class expression is local to the class' body.
*/

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

/*
The Constructor Method

- The constructor method is a special method we use to create and initialize objects of a class.

- A class can only have one special method with the name constructor, and attempting to write a class containing more than one constructor method will throw a SyntaxError.

- To implement inheritance, we can use the super keyword in a constructor to call a parent class constructor.
*/

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

/*
Static Methods

Static methods are methods relevant to all instances of a class - not just any one instance. These methods receive information from their arguments and now a class instance, which allows us to invoke a class' static methods without creating an instance of the class. In fact, we actually can't call a static method on an instantiated class object (attempiting to do so throws a TypeError).

We define a class' static methods using the static keyword. We typically use these methods to create utility functions for applications, as they can't be called on class objects.
*/

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

/*
Inheritance

In essence, this construct allows us to create an object prototype or class that's an extension of another object prototype or class. A class inheriting from some other class (referred to as a superclass or parent class) is called a subclass (or child class). The subclass inherits the superclass' methods and behaviors, but it can also declare new ones or even override existing ones.

Subclassing with the extends Keyword

We use the extends keyword in class declarations or class expressions to create a child class (i.e., subclass).
*/

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

/*
Superclass Calls Using the super Keyword

We use the super keyword to call functions on an object's parent.
*/

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

/*
Extending an Object

The ability to extend multiple classes from the same superclass (or model multiple object types after the same prototype) is powerful because it provides us with certain implied guarantees about the basic functionality of the subclasses; as extensions of the parent class, subclasses are guaranteed to (at minimum) have the superclass' fields, methods, and functions.

Example:
In this example, we call the superclass constructor using super(), override a superclass function (speak()), add an additional property (collarColor), and add a new subclass method (collar()).
*/

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
