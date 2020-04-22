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

// async / await
async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three.'});
    getPosts();
}

// init();

// async / await / fetch

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json(); // convert the response to json when using fetch
    console.log(data);
    getPosts();
}

fetchUsers();
