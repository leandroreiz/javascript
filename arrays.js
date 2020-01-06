/*
const items = [
    { name: 'Bike',     price: 100  },
    { name: 'TV',       price: 200  },
    { name: 'Album',    price: 10   },
    { name: 'Book',     price: 5    },
    { name: 'Phone',    price: 500  },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25   }
];

// 1. Array.filter(single_function)
const filteredItems = items.filter((item) => {
    return item.price <= 100;
});

// returns true or false for each item. If it is true, so it's inside the new array and, of course, if it's false it will not enter the new array.
console.log(filteredItems);

// 2. Array.map(single_function)
const itemNames = items.map((item) => {
    return item.name;
});

console.log(itemNames);

// 3. Array.find()
const foundItem = items.find((item) => {
    return item.name === 'Book';
});

console.log(foundItem);

// 4. Array.forEach
items.forEach((item) => {
    console.log(item.name);
});

// 5. Array.some
const hasInexpensiveItems = items.some((item) => {
    return item.price < 100;
});

//returns true or false
console.log(hasInexpensiveItems);

// 6. Array.every

const hasExpensiveItems = items.every((item) => {
    return item.price <= 1001;
});

//all items inside the array need to attend the condition
console.log(hasExpensiveItems);

// 7. Array.reduce

const total = items.reduce((currentTotal, item) => {
    //there are 3 parameters:
    //1) value returned by the previous iteration,
    //2) actual item in the array
    return item.price + currentTotal;
}, 0);
    //3) starting point inside the array

console.log(total);

// 8. Array.includes
const valueItems = [1, 2, 3, 4, 5];

const includesTwo = valueItems.includes(2);
const includesTen = valueItems.includes(10);

console.log(includesTwo);
console.log(includesTen);

//-------------------------------------------
// 1. Create an Array
var a = ['first', 'second'];

console.log('a\'s contents:', a);
console.log('a\'s length:', a.length);

// 2. Access (Index Into) an Array Item
let a = ['first', 'second'];

// first = 'first'
let first = a[0]; 

// last = 'second'
let last = a[a.length - 1]; 

console.log('a[0]:', first);
console.log('a[a.length - 1]:', last);

// 3. Loop over an array
var a = ['first', 'second'];

a.forEach(function(e, i, array) {
    // 'i' is the index
    // 'e' is the element
    console.log(i + ' ' + e);
});

// 4. Append to the end of an array
var a = ['first', 'second'];

// Append 'third' to array 'a'
a.push('third');

console.log('a:', a);

// 5. Remove from the end of an array
var a = ['first', 'second', 'third'];
console.log('Original Array:', a);

// Remove the last element from the array
let removed = a.pop();

console.log('Modified Array:', a);
console.log('Removed Element:', removed);

// 6. Remove from the front of an array
var a = ['first', 'second', 'third'];
console.log('Original Array:', a);

// Remove the first element from the array
let removed = a.shift();

console.log('Modified Array:', a);
console.log('Removed Element:', removed);

// 7. Add to the front of an array
var a = ['first', 'second', 'third'];
console.log('Original Array:', a);

// Insert element at the beginning of the array
a.unshift('fourth');

console.log('Modified Array:', a);

// 8. Find the index of an item in the array
var a = ['first', 'second', 'third', 'fourth'];

let position = a.indexOf('second');

console.log('a:', a);
console.log('position:', position);

// 9. Remove an item by index position
var a = ['first', 'second', 'third', 'fourth', 'fifth'];
console.log('Original Array: ', a);

let position = 1;
let elementsToRemove = 2;
// Remove 'elementsToRemove' element(s) starring at 'position'
a.splice(position, elementsToRemove);

console.log('Modified Array: ', a);

// 10. Copy an array
var a = ['first', 'second', 'third', 'fourth'];
console.log('a: ', a);

// Shallow copy array 'a' into a new object
let b = a.slice();

console.log('b: ', b);

// 11. Sort an array
var a = ['c', 'a', 'd', 'b', 'aa'];
var b = [9, 2, 13, 7, 1, 12, 123];

// Sort in ascending lexicographical order using a built-in
a.sort();
b.sort();

console.log('a: ', a);
console.log('b: ', b);

// Sort in descending lexicographical order using a compare function
var a = ['c', 'a', 'd', 'b', 'aa'];
var b = [9, 2, 13, 7, 1, 12, 123];

a.sort(function(x, y) { return x < y });
b.sort(function(x, y) { return x < y });

console.log('a: ', a);
console.log('b: ', b);

// Sort in descending lexicographical order using a compare arrow function
var a = ['c', 'a', 'd', 'b', 'aa'];

a.sort((x, y) => x < y);

console.log('a: ', a);
*/
// 12. Iterate over an array
var a = ['first', 'second', 'third', 'fourth'];

for (let e of a) {
    console.log('e: ', e);
}
