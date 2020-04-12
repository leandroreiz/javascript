// source: https://www.youtube.com/watch?v=NIq3qLaHCIs

const personOne = {
    name: 'Leandro',
    age: 36,
    address: {
        city: 'Miami',
        state: 'Florida'
    }
}

const personTwo = {
    name: 'Chelem',
    age: 34,
    address: {
        city: 'Los Angeles',
        county: 'California'
    }
}

const personThree = {
    age: 70,
    address: {
        city: 'Belo Horizonte',
        county: 'Minas Gerais'
    }
}

const personFour = {
    name: 'Nina',
    age: 5,
    address: {
        city: 'Belo Horizonte',
        county: 'Minas Gerais'
    },
    favouriteFood: 'Banana'
}

// destructuring objects works pretty similar to arrays
// you can define a variable name (name: firstName) or use the keys present at the object (age)
const { name: firstName, age } = personOne;
console.log(firstName);     // Leandro
console.log(age);           // 36

// using the spread operator
const { name: firstName2, ...rest } = personTwo;
console.log(firstName2);    // Chelem
console.log(rest);          // {age: 34, address {...}}

// setting a default value
const { name: firstName3 = 'Not Inserted', age: age3 } = personThree;
console.log(firstName3);    // Not Inserted
console.log(age3);          // 70

// destructuring nested objects
const { name: firstName4, address: { city } } = personFour;
console.log(firstName4);    // Nina
console.log(city);          // Belo Horizonte

// combining objects
const personFive = {
    age: 25,
    favoriteFood: 'Pizza'
}

// combining personOne and personFive using destructuring and spread operator
// notice that everything in personFive overwrites what is in personOne
const personSix = { ...personOne, ...personFive };
console.log(personSix);     // {name: "Leandro", age: 25, address: {…}, favoriteFood: "Pizza"}

// declaring a function to print user details
function printUser(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

printUser(personOne);       // Name: Leandro, Age: 36

// using destructuring with functions to get specific data from object
function printUserName({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printUserName(personOne);   // Name: Leandro, Age: 36

// setting a default value as a parameter
function printFavoriteFood({ favouriteFood = 'Lasagna'}) {
    console.log(`My favourite food is ${favouriteFood}`);
}

// don't have the key/value informed
printFavoriteFood(personOne);   // My favourite food is Lasagna
// has the favouriteFood set to 'Banana'
printFavoriteFood(personFour);  // My favourite food is Banana
