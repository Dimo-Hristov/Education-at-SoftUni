const formElement = document.querySelector('div form');
const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const postsElement = document.querySelector('.topic-container');

export function createPost(e) {
    e.preventDefault()
    const formData = new FormData(formElement);

    const title = formData.get('topicName').trim();
    const username = formData.get('username').trim();
    const content = formData.get('postText').trim();

    if (!title || !username || !content) {
        alert('All fields must be fulfilled');
        return;
    }

    const date = new Date();
    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).replace(',', '')

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            title,
            username,
            content,
            date: formattedDate
        })
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Server response error');
            }
            return res.json();
        })
        .then(data => {
            alert('Successful added post');
            renderPost(data)
        })
        .catch(err => alert(err.message));

    formElement.reset();
}

function renderPost(post) {

    const currentPost = document.createElement('div');
    currentPost.className = "topic-name-wrapper";
    currentPost.innerHTML = `
        <div class="topic-name">
            <a href="#" class="normal" id="${post._id}">
                <h2>${post.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${post.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${post.username}</span></p>
                    </div>
                </div>
            </div>
        </div>
        `
    postsElement.appendChild(currentPost)
}




