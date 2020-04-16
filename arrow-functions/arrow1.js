//**** JS ES6 - ARROW FUNCTIONS & LEXICAL THIS */

// ES5
var redBtn = {
    color: 'red',
    position: 1,
    clickMe: function() {
        document.querySelector('.btn-danger').addEventListener('click', function() {
            var str = 'This is the button number ' + this.position + ' and its color is ' + this.color;
            alert(str);
        });
    }
}
redBtn.clickMe();
// output: This is the button number undefined and its color is undefined

// In this case the function (method) is being called on the global scope (window) and because of this the 'this keyword' points to the global scope, as expected. This is the standard behavior of ES5 function declarations and expressions.

var greenBtn = {
    color: 'green',
    position: 2,
    clickMe: function() {
        // declare a variable and set its value to 'this'
        var self = this;
        document.querySelector('.btn-success').addEventListener('click', function() {
            var str = 'This is the button number ' + self.position + ' and its color is ' + self.color;
            alert(str);
        });
    }
}
greenBtn.clickMe();
// output: This is the button number 2 and its color is green

// ES6
// using arrow functions
const blueBtn = {
    color: 'blue',
    position: 3,
    clickMe: function() {
        document.querySelector('.btn-primary').addEventListener('click', () => {
            const str = `This is the button number ${this.position} and its color is ${this.color}`;
            alert(str);
        });
    }
}
blueBtn.clickMe();
// output: This is the button number 3 and its color is blue

const yellowBtn = {
    color: 'yellow',
    position: 4,
    // this was modified to be an arrow function also
    clickMe: () => {
        document.querySelector('.btn-warning').addEventListener('click', () => {
            const str = `This is the button number ${this.position} and its color is ${this.color}`;
            alert(str);
        });
    }
}
yellowBtn.clickMe();
// output: This is the button number undefined and its color is undefined

// this happens because now the 'clickMe: () => {...}' function shares the window scope, so as the this keyword.