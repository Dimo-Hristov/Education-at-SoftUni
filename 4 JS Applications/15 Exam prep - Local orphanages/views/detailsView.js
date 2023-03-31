import { html, nothing } from "../node_modules/lit-html/lit-html.js";
import { getDetails } from "../src/api/data.js";

const detailsTemplate = (post, userId) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${post.imageUrl}" alt="Material Image" class="post-image" />
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">${post.description}</p>
                <p class="post-address">${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: 0</p>

                <!--Edit and Delete are only for creator-->

                <div class="btns">
                    ${userId === post._ownerId
              ? html`<a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                    <a href="/delete/${post._id}" class="delete-btn btn">Delete</a>`
              : nothing}

                    <!--Bonus - Only for logged-in users ( not authors )-->
                    ${userId && userId !== post._ownerId
                ? html`<a href="#" class="donate-btn btn">Donate</a>`
                : nothing}
                </div>
            </div>
        </div>
    </div>
</section>
`;

export const detailsView = (ctx) => {
    const postId = ctx.params.id;
    const userId = ctx.user?._id;

    getDetails(postId)
        .then(post => {
            ctx.render(detailsTemplate(post, userId));
        })
        .catch(err => alert(err.message))
}
