//use of for...in

cars = {
    make: 'Ford',
    model: 'Mustang',
    year: 2020
}

for (let i in cars) {
    console.log(i + ' = ' + cars[i]);
}

// it's not recommended to use this kind of 'for' loops to iterate through arrays, because the 'for...in' statement iterates over user-defined properties in addition to the array of elements.