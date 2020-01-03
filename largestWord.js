str = 'I Love Programming';
str = str.split(' ');
let largestStr = '';

for (i = 0; i < str.length; i++) {
    if (str[i].length > largestStr.length) {
        largestStr = str[i];
    }
}

str = largestStr;

console.log(str);