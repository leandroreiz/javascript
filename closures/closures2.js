function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside')
newFunction('inside')

/**
 * "...when you have a function defined inside another function the inner function has access to the variables and scope of the outer function, even if the outer function finishes executing and those variables are no longer acessible outside that function."
 * 
 * Kyle
 * https://www.youtube.com/watch?v=3a0I8ICR1Vg
 */