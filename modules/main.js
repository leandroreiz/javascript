import User, { printName as printUserName, printAge } from './user.js'
// import U from './user.js', we can change the name for the object we're importing
// import { printName as printUserName, printAge } from './user.js', if you don't want to import the default module

// now we can use the class we imported
const user = new User('Leandro', 36);
console.log(user);

printUserName(user);
printAge(user);