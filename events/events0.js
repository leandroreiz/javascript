/**
 * Some JavaScript Events:
 * - cLick
 * - mouseenter
 * - mouseleave
 * - mousedown
 * - mouseup
 * - mousemove
 * - keydown
 * - keyup
 * - blur
 * - focus
 * 
 * source: https://developer.mozilla.org/en-US/docs/Web/Events
 */

// add numbers
let numOne = document.getElementById('num-one');
let numTwo = document.getElementById('num-two');
let addSum = document.getElementById('add-sum');

numOne.addEventListener('input', add);
numTwo.addEventListener('input', add);

function add() {
    let one = parseFloat(numOne.value) || 0;
    let two = parseFloat(numTwo.value) || 0;

    addSum.innerHTML = `Your sum is: ${one + two}`;
}

// pictures
let bruce = document.getElementById('bruce');
let will = document.getElementById('will');
let jennifer = document.getElementById('jennifer');

bruce.addEventListener('click', tooglePic);
will.addEventListener('click', tooglePic);
jennifer.addEventListener('click', tooglePic);

function tooglePic() {
    const allImages = document.querySelectorAll('img');
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].className = 'hide';
    }

    const picId = this.attributes['data-img'].value;
    const pic = document.getElementById(picId);
    
    if (pic.className === 'hide') {
        pic.className = '';
    } else {
        pic.className = 'hide'
    }
}
