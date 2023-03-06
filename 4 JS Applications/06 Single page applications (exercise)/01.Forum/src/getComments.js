const container = document.querySelector('.container');
const commentDiv = document.querySelector('.comment');
const headerDiv = document.querySelector('.header');
const answerComment = document.querySelector('.answer-comment');
const commentsElement = document.querySelector('#user-comment');
const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';


export function showComments(e) {
    const baseUrl = "http://localhost:3030/jsonstore/collections/myboard/posts";

    e.preventDefault();
    if (e.target.tagName == "H2") {
        const postID = e.target.parentNode.id;

        fetch(`${baseUrl}/${postID}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Response error')
                }
                return res.json()
            })
            .then((postDetails) => renderComment(postDetails));


    }
}

function renderComment(postDetails) {
    container.style.display = 'none';
    commentDiv.style.display = 'block';
    answerComment.style.display = 'block';

    headerDiv.id = postDetails._id;

    headerDiv.innerHTML = ''

    headerDiv.innerHTML = `
                <img src="./static/profile.png" alt="avatar">
                <p><span>${postDetails.username}</span> posted on <time>${postDetails.date}</time></p>

                    <p class="post-content">${postDetails.content}</p>
    `;
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



