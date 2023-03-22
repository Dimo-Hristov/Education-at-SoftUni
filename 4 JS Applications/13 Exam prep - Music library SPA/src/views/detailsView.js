import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getDetails, getLikes } from '../api/data.js';


const detailstemplate = (album, userId,likes) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src="${album.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

        <div id="action-buttons">
            ${userId && userId !== album._ownerId
            ? html`<a href="/like/${album._id}" id="like-btn">Like</a>`
                : nothing}
            ${userId === album._ownerId
        ? html`
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a href="/delete/${album._id}" id="delete -btn">Delete</a>

            `
        : nothing}
        </div>

    </div>
</section>
`;

export const detailsView = (ctx) => {
    const albumId = ctx.params.id;
    const userId = ctx.user?._id;

    let likes = 0;
     getLikes(albumId)
    .then(result => {
        likes =result;
    })
    .catch(err => alert(err.message))

    getDetails(albumId)
        .then(album => {
            ctx.render(detailstemplate(album, userId,likes));
        })
        .catch(err => alert(err.message))
}