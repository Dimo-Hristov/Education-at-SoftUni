import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getDetails } from '../api/data.js';

const detailsTemplate = (offer, userId) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${offer.imageUrl}" alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">1</strong></p>

        ${offer._ownerId === userId ?
        html`<div id="action-buttons">
            <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
            <a href="/delete/${offer._id}" id="delete-btn">Delete</a>
        </div>`
        : nothing}

        //
        <!--Bonus - Only for logged-in users ( not authors )-->
        // <a href="/apply/${offer._id}" id="apply-btn">Apply</a>
    </div>
</section>
`;

export const detailsView = (ctx) => {
    const userId = ctx.user ? ctx.user._id : null

    getDetails(ctx.params.id)
        .then(offer => {
            ctx.render(detailsTemplate(offer, userId))
        })
        .catch(err => alert(err.message))

}
