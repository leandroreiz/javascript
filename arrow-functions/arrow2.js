// ES5
function Person(name) {
    this.name = name;
}

Person.prototype.myFriendsES5 = function(friends) {
    // here we have a second function declaration
    var arr = friends.map(function(friend) {
        return this.name + ' is friends with ' + friend;
    });
    console.log(arr);
}

var friends = ['Fabio', 'Humberto', 'Wanderson'];
new Person('Leandro').myFriendsES5(friends);
// output: [" is friends with Fabio", " is friends with Humberto", " is friends with Wanderson"]

// sorting the problem with the 'bind' method
Person.prototype.myFriendsES5Bind = function(friends) {
    var arr = friends.map(function(friend) {
        return this.name + ' is friends with ' + friend;
    }.bind(this)); // the use of 'bind' here solves the problem
    console.log(arr);
}

new Person('Leandro').myFriendsES5Bind(friends);
// output: ["Leandro is friends with Fabio", "Leandro is friends with Humberto", "Leandro is friends with Wanderson"]

/********************************** */
/**** ES6 - Using arrow function ****/
/********************************** */

Person.prototype.myFriendsES6Arrow = function(friends) {
    var arr = friends.map(friend => `${this.name} is friends with ${friend}`);
    console.log(arr);
}

new Person('Leandro').myFriendsES6Arrow(friends);
// output: ["Leandro is friends with Fabio", "Leandro is friends with Humberto", "Leandro is friends with Wanderson"]