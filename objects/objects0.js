/*
 * Create an object with two properties, 'Name' and 'Age'

var actor = {
    Name: 'Julia Roberts', 
    Age: 36
};

// Print the object
console.log('The \'actor\' object:', actor);

// Access object's properties using bracket notation
console.log('The \'Name\' property:', actor['Name']);
console.log('The \'Age\' property:', actor['Age']);

// Access object's properties using dot notation
console.log('The \'Name\' property:', actor.Name);
console.log('The \'Age\' property:', actor.Age);

// Add a new property called 'EyeColor'
actor.EyeColor = 'Brown';

// Print the object
console.log('The updated \'actor\' object:', actor);

// Trying to access undefined property results in 'undefined'
console.log('Attempt to access an undefined property (\'HairColor\'):', 
    actor.HairColor);


// Using Initializer Notation
var a = 3;
var b = 'Rome';
var c = false;

var o = {a, b, c};

console.log('Object \'o\':', o);

var p = {
    a: 3, 
    b: 'Rome', 
    c: false
};

console.log('Object \'p\':', p);

var q = {};
console.log('Object \'q\' (Initial):', q);
q.a = a;
q.b = b;
q.c = c;
console.log('Object \'q\' (Updated):', q);

// Using new Object()

var o = new Object();

o.a = 4;
o.b = 'Rome';
o.c = true;

console.log('Object \'o\':', o);


// Using Object.create()

var x = {
    a: 5,
    foo: function() {
        return this.a * this.a;
    }
};

var o = Object.create(x);

console.log('\'x\':', x);
console.log('Object \'o\':', o);
console.log('Property \'o.a\':', o.a);
console.log('Method \'o.foo()\':', o.foo());

// Using a Constructor Function

function Actor(firstName, lastName, Age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;
}

var a1 = new Actor('Julia', 'Roberts', 48);
var a2 = new Actor('Kate', 'Winslet', 40);

console.log('Object \'a1\':', a1);
console.log('Object \'a2\':', a2);


// from: https://www.youtube.com/watch?v=4uVwGw317QM

let person = new Object();

person.name = "Daniel";
person.eyeColor = "Blue";
person.age = 27;
person.updateAge = function() {
    return ++person.age;
}

console.log(person.age);
person.updateAge();
console.log(person.age);

// short way to creat an object
let person = {
    name: "Daniel",
    eyeColor: "Blue",
    age: 27,

    updateAge: function() {
        return ++person.age;
    }
}
*/
// object constructor
function Person(name, eyeColor, age) {
    // person properties
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    
    // person methods
    this.updateAge = function() {
        return ++this.age;
    };
}

let person01 = new Person("Leandro", "Green", 36);
let person02 = new Person("Chelem", "Brown", 33);
console.log(person01.age);
person01.updateAge();
console.log(person01.age);