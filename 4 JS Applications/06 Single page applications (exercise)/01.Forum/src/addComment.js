const addPostDiv = document.querySelector('.answer');
const headerDiv = document.querySelector('.header')
const contentElement = addPostDiv.querySelector('form textarea');
const usernameElement = addPostDiv.querySelector('form div input');
const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
const commentsElement = document.querySelector('#user-comment')


export function addPost(e) {
    e.preventDefault();

    const date = new Date();
    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).replace(',', '')

    const postID = headerDiv.id

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            username: usernameElement.value,
            content: contentElement.value,
            postID: postID,
            date: formattedDate
        })
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Server response error')
            }

            return res.json()
        })
        .then(data => console.log(data))
        .catch(err => alert(err.message))
    getComments()
}


function getComments() {


    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('server response error')
            }
            return res.json()
        })
        .then(data => renderComments(Object.values(data)))

}

function renderComments(comments) {
    const postID = headerDiv.id;
    commentsElement.innerHTML = '';

    comments.forEach(x => {
        if (x.postID === postID) {
            console.log(x.postID);
            console.log(postID);

            const mainDiv = document.createElement('div')
            mainDiv.classList.add('topic-name-wrapper');
            mainDiv.innerHTML = `
            <div class="topic-name">
            <p><strong>${x.username}</strong> commented on <time>${x.date}</time></p>
            <div class="post-content">
                <p>${x.content}</p>
            </div>
            </div>
            `
            commentsElement.appendChild(mainDiv)
        }
    });
}







