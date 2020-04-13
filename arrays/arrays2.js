// JavaScript Higher Order Functions & Arrays
// source: https://www.youtube.com/watch?v=rRgD1yVwIvE

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//********* forEach */

for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

companies.forEach(function(company) {
    console.log(company.name);
});

//********* filter */

// Get elements with age over 21

//using for loop
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}

// using filter
const canDrinkFilter = ages.filter(function(age) {
    if (age >= 21) {
        return true;
    }
});

console.log(canDrinkFilter);

// using filter & arrow functions
const canDrinkArrow = ages.filter(age => age >= 21);
console.log(canDrinkArrow);

// Filter retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// Get all companies that started during the 80's
const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
console.log(eightiesCompanies);

// Get companies that lasted at least 10 years
const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10);
console.log(lastedTenYears);

//********* map */

// Create an array of company names
const companyNames = companies.map(company => company.name);
console.log(companyNames);

// Create an array with company names and start and end dates
const companyNamesDates = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyNamesDates);

// Calculate the square root for all ages
const agesSqrt = ages.map(age => Math.sqrt(age));
console.log(agesSqrt);

// you can even use two maps
const agesDoubleMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

console.log(agesDoubleMap);

//********* sort */

// Sort companies by start year
const sortedCompanies = companies.sort(function(a, b) {
    if (a.start > b.start) {
        return 1;
    } else {
        return -1;
    }
});

console.log(sortedCompanies);

const sortedCompaniesArrow = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);
console.log(sortedCompaniesArrow);

// Log into the console the ages array sorted
console.log(ages.sort()); // this won't work properly since it checks only the first number

// To solve the problem above we need to do as follows
console.log(ages.sort((a, b) => a - b));

// Now in decrescent order
console.log(ages.sort((a, b) => b - a));

//********* reduce */

// Sum all ages in the ages array
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}
console.log(ageSum);

// Now using reduce
const ageSumReduce = ages.reduce((total, age) => total + age, 0); // the 'zero' here is the starting value for total
console.log(ageSumReduce);

// Get total years for all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

// Combine Methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a- b)
    .reduce((total, age) => total + age, 0)

console.log(combined);
