import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllArticles } from "../api/data.js";

const articleTemplate = (article) => html`
<li class="card">
    <img src="${article.imageUrl}" alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${article.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${article.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${article.value}</span>$</p>
    <a class="details-btn" href="/details/${article._id}">Details</a>
</li>
    `

const dashboardTemplate = (articles) => html`
    <section id="dashboard">
        <h2>Collectibles</h2>
        ${articles.length == 0
        ? html` <h2>There are no items added yet.</h2>`
        : html`
        <ul class="card-wrapper">
            ${articles.map(x => html`${articleTemplate(x)}`)}
        </ul>
        `}
    </section>
`;

export const dashboardView = (ctx) => {
    getAllArticles()
        .then(articles => {
            ctx.render(dashboardTemplate(articles))
        })
        .catch(err => alert(err.message))
}