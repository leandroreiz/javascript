//IIFE - Immediately Invoked Function Expression

/*
(function() {
    let aName = 'Barry';
})();
console.log(aName);     //Uncaught ReferenceError: aName is not defined
 */

let result = (function() {
    let name = 'Barry';
    return name;
})();
console.log(result);    //return a result because the IIFE was assigned to a variable
