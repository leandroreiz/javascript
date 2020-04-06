/**
 * Objects and methods
 */

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