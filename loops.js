const colorsArray = ['red', 'blue', 'green', 'yellow'];

//using for loops
for (let i = 0; i < colorsArray.length; i++) {
    console.log(`using for: ${colorsArray[i]}`);
}

//using forEach
colorsArray.forEach(color => console.log(`using forEach: ${color}`));

const numbers = [1, 2, 3];

const result = [];
numbers.forEach(number => result.push(number * 2));
console.log(result);

//using maps
console.log(resultMap = numbers.map(number => number * 2));