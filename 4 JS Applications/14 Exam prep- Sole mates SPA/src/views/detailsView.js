import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getDetails } from "../api/data.js";

const detailsTemplate = (article, userId) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src="${article.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${article.brand}</span></p>
            <p>Model: <span id="details-model">${article.model}</span></p>
            <p>
                Release date: <span id="details-release">${article.release}</span>
            </p>
            <p>Designer: <span id="details-designer">${article.designer}</span></p>
            <p>Value: <span id="details-value">${article.value}</span></p>
        </div>

        ${userId === article._ownerId
        ? html`
        <div id="action-buttons">
            <a href="/edit/${article._id}" id="edit-btn">Edit</a>
            <a href="/delete/${article._id}" id="delete-btn">Delete</a>
        </div>
        `
        : nothing}
    </div>
</section>
`;


export const detailsView = (ctx) => {
    const articleId = ctx.params.id;
    const userId = ctx.user?._id;

    getDetails(articleId)
        .then(article => {
            ctx.render(detailsTemplate(article, userId))
        })
        .catch(err => alert(err.message))
}
