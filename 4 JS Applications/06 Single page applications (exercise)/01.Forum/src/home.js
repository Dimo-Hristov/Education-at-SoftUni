const postsElement = document.querySelector('.topic-container');
const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

const container = document.querySelector('.container');
const postElement = document.querySelector('.comment');
const answerComment = document.querySelector('.answer-comment')


export function renderHome() {

    fetch(url)
        .then(res => res.json())
        .then(posts => renderPosts(Object.values(posts)))

}

function renderPosts(data) {
    postsElement.innerHTML = '';
    postElement.style.display = 'none';
    answerComment.style.display = 'none';
    container.style.display = 'block';

    data.forEach(x => {

        const currentPost = document.createElement('div');
        currentPost.className = "topic-name-wrapper";
        currentPost.innerHTML = `
        <div class="topic-name">
            <a href="#" class="normal" id="${x._id}">
                <h2>${x.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${x.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${x.username}</span></p>
                    </div>
                </div>
            </div>
        </div>
        `
        postsElement.appendChild(currentPost)
    })
}