// const posts = [
//     {
//         title: 'Post One',
//         body: 'This is post one.'
//     },
//     {
//         title: 'Post two',
//         body: 'This is post two.'
//     }
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach(post => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);

// }

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);
// }

// getPosts();
// createPost({title: 'Post Three', body: 'This is post three.'});

// The output for the code above is 'Post One' and 'Post Two' in the browser, but if you check the array 'posts' you're going to see 3 posts. So why only 2 of them were printed in the browser?

// This happens because the 'createPost' function is taking longer to process, so when the HTML elements were created the information was not present in the array. To solve this, we need something to hold the faster function, 'getPosts', while the slower one obtain its results so they can be displayed in the first.

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

function createPost(post, callback) { // callback function
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// pass the faster function as a parameter
createPost({title: 'Post Three', body: 'This is post three.'}, getPosts);
