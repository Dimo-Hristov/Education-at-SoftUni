import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllProducts } from '../api/data.js';

const productTemplate = (product) => html`
<div class="product">
    <img src="./images/product example 1.png" alt="example1" />
    <p class="title">
        ${product.name}
    </p>
    <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
    <a class="details-btn" href="/details/${product._id}">Details</a>
</div>
`


const dashboardtemplate = (products) => html`
<h2>Products</h2>

${products.length == 0
? html`<h2>No products yet.</h2>`
    : html`<section id="dashboard">
    ${products.map(product => productTemplate(product))}
</section>
`}
`;

export const dashboardView = (ctx) => {
    getAllProducts()
        .then(products => {
            ctx.render(dashboardtemplate(products));
        })
        .catch(err => alert(err.message))
}