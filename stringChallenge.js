/*
Given a string, S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).

Note: 0 is considered to be an even index.
*/

const input = '2\nHacker\nRank';

let strArr = (input.split('\n').slice(1));

for (let i = 0; i < strArr.length; i++) {

    let evenStr = '';
    let oddStr = '';
    
    for (let j = 0; j < strArr[i].length; j++) {
        (j % 2 === 0) ? evenStr += strArr[i][j] : oddStr += strArr[i][j];
    }
    console.log(`${evenStr} ${oddStr}`);
}