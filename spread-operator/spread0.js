/* Basically, there are three places you can use spread:

1. In function calls
2. In array literals
3. In object literals
 */

const arrNumbers = [25,70,15,32,65,98];
const arrStrings = ['Chelem', 'Nina', 'Nick'];
const str = 'BANANAS';

// Spread & Function Calls

result = Math.min(arrNumbers);
console.log(result);            // NaN

result = Math.min(...arrNumbers);
console.log(result);            // 15

console.log(arrStrings);        // logs the array object
console.log(...arrStrings);     // Chelem Nina Nick

// Spread & Array Literals

const parents = ['Guilherme', 'Luiza'];
const kids = ['Leonardo', 'Leandro', 'Andre'];
// family = [parents, kids]     // this creates a nested array
family = [...parents, ...kids]; // combines the arrays spread into one
console.log(family);            

const pets = ['Tony', 'Nina'];

family = [...parents, ...kids, "My wife Chelem", ...pets, "Marileia & Helio"];
console.log(family);            // you can combine arrays and new values

// Copying an array

const originals = ['Mona Lisa', 'American Gothic', 'The School of Athens'];
const copiesPtr = originals;    // this creates a POINTER to the 'originals' array
copiesPtr.push("Nighthawks");   // so if we change the copies array...
console.log(originals);         // ...the originals will also be changed.

const copies = [...originals];  // using the spread operator does not create a pointer, but a real copy of 'originals' in this case
copies.push("The Night Watch"); // adding a new item here...
console.log(copies);
console.log(originals);         // ...does not affect the 'originals' array

// IMPORTANT: Spread only goes "one Level" deep when copying an array. It does not perform a deep copy of nested array

const gameBoard = [['O', 'O'], ['O', 'O'], ['O', 'O']];
console.log(gameBoard);
const boardCopy = [...gameBoard];
console.log(boardCopy);
boardCopy[0][1] = 'X';

// Both now look like this:
// [['O', 'X'], ['O', 'O'], ['O', 'O']]

// Spread & Object Literals

// Just like in arrays, we can use spread to combine existing objects:

const mainColors = {brightRed: '#e55039', waterfallBlue: '#38ada9'};
const accentColors = {lightGrey: '#778ca3', swanWhite: '#f7f1e3'};

const fullPalette = {...mainColors, ...accentColors};
console.log(fullPalette);

// Another example:

const lion = {hasTail: true, legs: 4};
const eagle = {canFly: true};

const hybrid = {name: 'Gryphon', ...lion, ...eagle};
console.log(hybrid);

// Spread & Immutability

/* In frameworks like React, it's important not to mutate specific data (the state, specifically). Because of the way React is written, updating arrays & objects directly in the state can cause issues where your app does not render or re-render when it should. You'll often see spread used in this context.

Here's a simples example of what NOT to do. We have an array of todos, and we want to add a new todo to the end of that array. The "easy" way is to simply push on to todos, BUT THAT MUTATES THE ARRAY!


const todos = [
    {user: 'Brick', completed: false, task: 'Upload Video'},
    {user: 'Lilith', completed: true, task: 'Rob Bank'}
]

function addTodo(newTodo) {
    todos.push(newTodo);
}

Rather than mutating the todos array directly, we should intead make a copy of the todos array that also contains the newTodo added at the end. Spread makes this relatively easy:
*/

const todos = [
    {user: 'Brick', completed: false, task: 'Upload Video'},
    {user: 'Lilith', completed: true, task: 'Rob Bank'}
]

function addTodo(newTodo) {
    return [...todos, {...newTodo, completed: false}]
}

const newTodos = addTodo({user: 'Mordecai', task: 'Feed Bloodwing'});
console.log(todos);
console.log(newTodos);
