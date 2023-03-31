import { html } from '../node_modules/lit-html/lit-html.js';
import { getAllPosts } from '../src/api/data.js';

const postTemplate = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src="${post.imageUrl}" alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>
`;


const dashboardTemplate = (posts) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    ${posts.length == 0
    ? html`<h1 class="title no-posts-title">No posts yet!</h1>`
    : html`
    <div class="all-posts">
        ${posts.map(x => postTemplate(x))}
    </div>
    `}
</section>
`;

export const dashboardView = (ctx) => {
    getAllPosts()
        .then(data => ctx.render(dashboardTemplate(data)))
        .catch(err => alert(err.message))
}