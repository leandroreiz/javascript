strArr = str.split('');

str = [];

for (let i = strArr.length - 1; i >= 0; i--) {
    str.push(strArr[i]);
}

return str.join('');