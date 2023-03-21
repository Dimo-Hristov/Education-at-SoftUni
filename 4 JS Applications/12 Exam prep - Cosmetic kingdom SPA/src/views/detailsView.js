import { html, nothing, } from '../../node_modules/lit-html/lit-html.js';
import { getDetails } from '../api/data.js';

const detailsTemplate = (product, userId) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${product.imageUrl}" alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
            Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${product.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span>${product.description}</span>
            </div>
        </div>

        <div id="action-buttons">
            ${userId === product._ownerId
            ? html`
            <a href="/edit/${product._id}" id="edit-btn">Edit</a>
            <a href="/delete/${product._id}" id="delete-btn">Delete</a>`
                : nothing}

            ${userId && userId !== product._ownerId
            ? html`<a href="/buy/${product._id}" id="buy-btn">Buy</a>`
        : nothing}

        </div>
    </div>
</section>
`


export const detailsView = (ctx) => {
    const productId = ctx.params.id;
    const userId = ctx.user?._id

    getDetails(productId, userId)
        .then(product => {
            console.log(product);
            ctx.render(detailsTemplate(product, userId))
        })
        .catch(err => alert(err.message))
}
