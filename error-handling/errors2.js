function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo]) {
        return months[mo];
    } else {
        throw 'InvalidMonthNo'; // throw keyword is used here
    }
}

let myMonth = 20;

try { // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
}
catch(e) {
    monthName = 'unknown';
    logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}

function logMyErrors(message) {
    console.error(message);
}
