// declaring variables
var globalVar = 'var';
let globalLet = 'let';
const globalConst = 'const';

console.log(globalVar + ', ' + globalLet + ' and ' + globalConst + '.');

var globalVar = 'var outer modified';

/**
 * var globalLet = 'let modified'; //'globalLet' has already been declared
 */

globalLet = 'let outer modified';

 /**
 * const globalConst = 'const modified'; //'globalConst' has already been declared
 */

 console.log(globalVar + ', ' + globalLet + ' and ' + globalConst + '.');

/**
 * globalConst = 'const modified'; //assignment to constant variable
 */

// inside another scope/block
function exampleVar() {
    // log the global variable
    console.log(globalVar);
    // modify the global var
    globalVar = 'var inner scope';
    console.log(globalVar);
}

exampleVar();

function exampleLet() {
    // log the global variable
    console.log(globalLet);
    // modify the global let
    globalLet = "let inner scope";
    console.log(globalLet);
}

exampleLet();

function exampleConst() {
    // log the global variable
    console.log(globalConst);
}

exampleConst();

function innerScope() {
    // function scoped
    var innerVar = 'inner var';
    let innerLet = 'inner let';
    const innerConst = 'inner const';
    console.log(innerVar + ', ' + innerLet + ', ' + innerConst + '.');
}

innerScope();

/** return Reference error
* 
* innerVar = innerVar + 'var modified outiside its scope';
* console.log(innerVar);
*
* innerLet += 'let modified outiside its scope';
* console.log(innerLet);
*/