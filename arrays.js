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