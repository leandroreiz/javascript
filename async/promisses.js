const posts = [
    {
        title: 'Post One',
        body: 'This is post one.'
    },
    {
        title: 'Post two',
        body: 'This is post two.'
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);

}

function createPost(post) { // callback function
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }
        }, 2000);
    });    
}

// createPost({ title: 'Post Three', body: 'This is post three' })
//     .then(getPosts)
//     .catch(err => console.log(err));

// Promise.all
const promiseOne = Promise.resolve('Hello Promises');
const promiseTwo = 10;
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye');
});

// for fetch we need to use one .then to convert the response to json
const promiseFour = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());

// call the Promise.all and inform all the promises in an array
Promise.all([promiseOne, promiseTwo, promiseThree, promiseFour])
    .then(values => console.log(values));
