function countdown(num) {
    // base case
    if (num <= 0) {
        console.log('All done!');
        return;
    }
    console.log(num);

    // recursive case
    num--;
    countdown(num);
}

countdown(4);
