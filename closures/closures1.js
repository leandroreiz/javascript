let myName = 'Rachel';

function printName() {
    console.log(myName);
};

myName = 'Joey';

printName(); // you can see here that the variable printed has the last value assigned to it

myName = 'Ross'

printName(); // proving the statement above

/**
 * Usually other languages don't allow you to access variables outside the function scope. JavaScript allows you to do that and this is called 'closures'.
 */