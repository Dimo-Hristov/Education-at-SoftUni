import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllAlbums } from '../api/data.js';

const albumTemplate = (album) => html`
<li class="card">
    <img src="${album.imageUrl}" alt="travis" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${album.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
    <a class="details-btn" href="/details/${album._id}">Details</a>
</li>
`;

const dashboardTemplate = (albums) => html`
    <section id="dashboard">
        <h2>Albums</h2>
    
        ${albums.length == 0
        ? html`<h2>There are no albums added yet.</h2>`
        : html`
        <ul class="card-wrapper">
            ${albums.map(x => albumTemplate(x))}
        </ul>`}
    </section>
`;

export const dashboardView = (ctx) => {
    getAllAlbums()
        .then(albums => {
            ctx.render(dashboardTemplate(albums));
        })
        .catch(err => alert(err.message))
}