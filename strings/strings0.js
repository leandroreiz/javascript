let stringOne = 'freeCodeCamp is the best place to learn';
let stringTwo = 'frontend and backend development';

// startsWith()
// search at the start of the string and return true or false if the value was found
console.log(stringOne.startsWith('free'));

// endsWith()
// search at the end of the string and return true or false if the value was found
console.log(stringOne.endsWith('learn'));

// includes()
// search through the string and return true or false if the value was found
console.log(stringOne.includes('best'));

// charAt()
// returns the character at the specified position
console.log(stringOne.charAt(0));

// charCodeAt
// return the char code at the specified position
console.log(stringOne.charCodeAt(0));

// concat()
// concatenete two strings
console.log(stringOne.concat(stringTwo));

// fromCharCode()
// return the char correspondent to the code informed
console.log(String.fromCharCode(102));

// indexOf()
// return the index where the expression informed starts (first occurrence)
console.log(stringTwo.indexOf('end'));

// lastIndexOf()
// return the index where the expression informed starts (last occurrence)
console.log(stringTwo.lastIndexOf('end'));

// match() - for more info check regular expressions
// create an array with all the occurrences where the regular expression informed was found
console.log(stringTwo.match(/end/g));

// repeat()
// repeat the string 'x' times
console.log(stringOne.repeat(2));

// replace()
// replace the regular expression with the value informed in the second parameter
// obs.: using a string as the first parameter will replace only the first occurrence
console.log(stringTwo.replace(/end/g, 'END'));

// search()
// return the index where the first occurrence was found
console.log(stringTwo.search('end'));

// slice()
// return a substring starting at the first parameter and finishing before the second parameter
// in the example below the indexes returned would be 2 and 3. 4 is not included.
console.log(stringOne.slice(2, 4));

// split()
// return an array with 'x' elements based on the separator informed as a parameter
console.log(stringTwo.split(' '));

// substr()
// return a substring starting at the first index informed and with the length informed in the second parameter
console.log(stringOne.substr(2, 4));

// substring()
// similar to slice()
console.log(stringOne.substring(2, 4));

// toLowerCase()
console.log(stringOne.toLowerCase());

// toUpperCase()
console.log(stringTwo.toUpperCase());

// trim()
// removes white spaces at the beggining and at the end of a string
let stringThree = '     JavaScript!     ';
console.log(stringThree.trim());
