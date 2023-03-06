import { renderHome } from "./home.js";
import { createPost } from './addPost.js';
import { showComments } from "./getComments.js";
import { addPost } from "./addComment.js";


renderHome();

const postsElement = document.querySelector('.topic-container');
postsElement.addEventListener('click', showComments)

const postButton = document.querySelector('.public')
postButton.addEventListener('click', createPost);

const homeButton = document.querySelector('nav');
homeButton.addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        console.log('click');
        renderHome();
    }
})

const addCommentBtn = document.getElementById('add-comment')
addCommentBtn.addEventListener('click', addPost)

