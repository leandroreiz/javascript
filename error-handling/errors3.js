try {
    throw 'myException';
}
catch(err) {
    logMyErrors(err);
}

function logMyErrors(message) {
    console.error(message);
}
