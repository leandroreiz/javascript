/**
 * Arrays
 */

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