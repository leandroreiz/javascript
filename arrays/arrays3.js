

listOfHotels = [
    {name: 'powerscourt', stars: 5, rating: 4.1, distanceFromCityCentre: 5000},
    {name: 'moldron', stars: 3, rating: 3.7, distanceFromCityCentre: 2000},
    {name: 'ibis', stars: 4, rating: 4.0, distanceFromCityCentre: 3000},
    {name: 'hilton', stars: 5, rating: 4.7, distanceFromCityCentre: 1500},
    {name: 'charlemont', stars: 2, rating: 4.2, distanceFromCityCentre: 7500},
    {name: 'portobelo', stars: 4, rating: 3.5, distanceFromCityCentre: 500}
];

// sorting an array of objects
// by the rating of the hotel
function sortByRating(a, b) {
    if (a.rating > b.rating) {
        return 1;
    } else if (a.rating < b.rating) {
        return -1;
    } else {
        return 0;
    }
}

// sorting numbers
const increasingOrder = [...listOfHotels].sort(sortByRating);
const decreasingOrder = [...listOfHotels].sort((a, b) => a.rating - b.rating).reverse();

// sorting strings by the name of the hotel
// these lines of code won't work
// const sortByName = [...listOfHotels].sort();
// sortByName = [...listOfHotels].sort((a, b) => a.name - b.name);

function sortByName(a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
}

sortByName = [...listOfHotels].sort(sortByName);

// printing the results
console.log(listOfHotels);
console.log(increasingOrder);
console.log(decreasingOrder);
console.log(sortByName);