/**
 * Objects and properties
 */

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
