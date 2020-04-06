/*
JavaScript: Template Literals (Template Strings)

Template literals (formerly known as template strings) are string literals that allow for embedded expressions. We typically use them to express strings spanning multiple lines or for string interpolation, which essentially allows us to create a template with one or more placeholders for inserting variable text at a later time.

While traditional strings are wrapped in single or double quotes, template literals are wrapped in backtick (`) characters. A template literal can contain placeholders, which are preceded by a dollar sign ($) and wrapped in curly braces ({}). For example, in the template literal `${expression}`, the  text between the placeholders is passed to a function. The default function simply concatenates the template literal's parts into a single string.

Any time we see an expression preceding a template literal, we call the expression a tag and the template string a tagged template literal. In these instances, we call the tag expression (typically a function) with the processed template literal, which we can then manipulate before outputting the final string.
*/

// multi-line strings
// normal strings
console.log("first line\n" + "second line");
console.log("first line" + "\nsecond line");
console.log("first line\nsecond line");

// template literals
console.log(`first line
second line`);

const a = 2;
const b = 3;

// expression Interpolation
// normal strings
console.log(
    'The sum of a and b is ' + (a + b) + '.\n' 
    + 'The product of a and b is ' + (a * b) + '.'
);

// template literals
console.log(`The sum of a and b is ${a + b}. 
The product of a and b is ${a * b}.`);
