// Axios Instances
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
    // ...
    // other custom settings
});

// axiosInstance.get('/comments').then(res => showOutput(res))

// Axios Globals
axios.defaults.headers.common['Z-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// Get Request
function getTodos() {
    // axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     params: {
    //         _limit: 5
    //     }
    // })
    // .then(res => showOutput(res))
    // .catch(err => console.log(err));

    // by default the method 'axios()' uses the get method, but you can do the same with 'axios.get()'
    axios
        .get(`https://jsonplaceholder.typicode.com/todos?_limit=5`, { timeout: 5000 })
        .then(res => showOutput(res))
        .catch(err => console.log(err));
}

// Post Request
function addTodo() {
    // axios({
    //     method: 'post',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     data: {
    //             "title": "new todo",
    //             "completed": false
    //     }
    // })
    //     .then(res => showOutput(res))
    //     .catch(err => console.log(err));

    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            "title": "New Todo",
            "completed": false
        })
        .then(res => showOutput(res))
        .catch(err => console.log(err));
}

// Update Request
function updateTodo() {
    axios
        // replace the entire resource
        // .put('https://jsonplaceholder.typicode.com/todos/1', {
        //     "title": "Updated Todo",
        //     "completed": true
        // })
        
        // update the data sent and keep the other data intact
        .patch('https://jsonplaceholder.typicode.com/todos/1', {
            "title": "Updated Todo",
            "completed": true
        })
        .then(res => showOutput(res))
        .catch(err => console.log(err));
}

// Delete Request
function removeTodo() {
    axios
        .delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => showOutput(res))
        .catch(err => console.log(err));
}

// Simultaneos Request
function getData() {
    axios
        .all([
            axios.get('https://jsonplaceholder.typicode.com/posts/1'),
            axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        ])
        .then(axios.spread((posts, comments) => showOutput(comments)))
        .catch(err => console.log(err));
}

// Custom Headers
function customHeaders() {
    const config = {
        headers: {
            'Content-type' : 'application/json',
            'Authorization' : 'some kind of token'
        }
    }

    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title: 'completed',
            completed: 'false'
        }, config)
        .then(res => showOutput(res))
        .catch(err => console.log(err));
}

// Transform Response
function transformResponse() {
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'Hello World!'
        },
        transformResponse: axios.defaults.transformResponse.concat(data => {
            data.title = data.title.toUpperCase();
            return data;
        })
    };

    axios(options).then(res => showOutput(res));
}

// Error Handling
function errorHandling() {
    axios
        .get(`https://jsonplaceholder.typicode.com/todoss`)
        // Validating status
        // .get(`https://jsonplaceholder.typicode.com/todoss`, {
        //     validateStatus: (status) => {
        //         return status < 500; // Reject only if status is equal or greater than 500
        //     }
        // })
        .then(res => showOutput(res))
        .catch(err => {
            if (err.response) {
                // Server responded with a status other than the 200 range
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
                if (err.response.status === 404) {
                    alert('Page not found!');
                }
            } else if (err.request) {
                // request was made but no response was returned
                console.log(err.request);
            } else {
                console.log(err.message);
            }
    });
}

// Cancel Token
function cancelToken() {
    const source = axios.CancelToken.source();

    axios
        .get(`https://jsonplaceholder.typicode.com/todos`, {
            cancelToken: source.token
        })
        .then(res => showOutput(res))
        .catch(thrown => {
            if (axios.isCancel(thrown)) {
                console.log('Request Canceled!', thrown.message)
            }
    });

    if (true) {
        source.cancel('Something unexpected happened...');
    }
}

// Intercepting Requests and Responses
axios.interceptors.request.use(config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.`);
    return config;
}, error => {
    return Promise.reject(error);
});

// Show output in Browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
        <div class="card card-body mb-4">
            <h5>Status: ${res.status}</h5>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                Headers
            </div>
            <div class="card-body">
                <pre>${JSON.stringify(res.headers, null, 2)}</pre>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                Data
            </div>
            <div class="card-body">
                <pre>${JSON.stringify(res.data, null, 2)}</pre>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header">
                Config
            </div>
            <div class="card-body">
                <pre>${JSON.stringify(res.config, null, 2)}</pre>
            </div>
        </div>
    `;
}

// Event Listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
