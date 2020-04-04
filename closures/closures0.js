function makeFunc() {
    var name = "Closures";
    
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc(); // Defining a variable (myFunc) as the function writen above
myFunc(); 

// Calling this function here it displays the variable 'name' which is not defined inside this scope. That happens due to the closures in JavaScript. Even though the function per se is already executed, we still have access to its contents.

var counter = (function() {
    var privateCounter = 0;

    function changeBy(val){
        privateCounter += val;
    };

    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    };
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());