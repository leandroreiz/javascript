// Modules

// using export default in line
export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// using export in line
export function printName(user) {
    console.log(`User's name is ${user.name}.`)
}

export function printAge(user) {
    console.log(`User is ${user.age} years old.`)
}

// You can also export the desired items at the end of your file as you can see below

// export default User
// export { printName, printAge }

// Remember: You can only default export one thing, in this case we're exporting as default the class User