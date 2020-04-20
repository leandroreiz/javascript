// Elements
let pageCounter = 1;
const btn = document.getElementById('btn');
const animalInfo = document.getElementById('animal-info');

// Listeners
btn.addEventListener('click', loadText);

// Functions
function loadText() {
    // AJAX
    myRequest = new XMLHttpRequest();
    myRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
    myRequest.onload = () => {
        if (myRequest.status >= 200 && myRequest.status < 400) {
            let myData = JSON.parse(myRequest.responseText);
            renderHTML(myData);
        } else {
            console.log('We connected to the server, but it returned an error.');
        }
    }
    myRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add('hide');
    }
}

function renderHTML(data) {
    htmlString = '';

    data.forEach((item) => {
        htmlString += `<p> ${item.name} is a ${item.species} that likes to eat `;
        
        for (let i = 0; i < item.foods.likes.length; i++) {
            if (i == 0) {
                htmlString += `${item.foods.likes[i]}`;
            } else {
                htmlString += ` and ${item.foods.likes[i]}`;
            }
        }

        htmlString += ` and dislikes `;

        for (let i = 0; i < item.foods.dislikes.length; i++) {
            if (i == 0) {
                htmlString += `${item.foods.dislikes[i]}`;
            } else {
                htmlString += ` and ${item.foods.dislikes[i]}`;
            }
        }

        htmlString += `.</p><hr>`;        
    })

    animalInfo.insertAdjacentHTML('beforeend', htmlString);
}
