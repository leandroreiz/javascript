function f() {
    try {
        throw 'bogus';
    } catch(e) {
        console.log('caught inner "bogus"');
        throw e;    // this throw statement is suspended until
                    // finally block has completed
    } finally {
        return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
}

try {
    console.log(f());
} catch(e) {
    // this is never reached!
    // while f() executes, the 'finally' block returns false,
    // which overwrites the 'throw' inside the above 'catch'
    console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
// false
