import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { getSearchedBrand } from "../api/data.js";


const artileTemplate = (article, userId) => html`
    <li class="card">
        <img src="./images/travis.jpg" alt="travis" />
        <p>
            <strong>Brand: </strong><span class="brand">${article.brand}</span>
        </p>
        <p>
            <strong>Model: </strong><span class="model">${article.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${article.value}</span>$</p>
        ${userId
        ? html`<a class="details-btn" href="/details/${article._id}">Details</a>`
        : nothing}
    </li>
    `;

const resultTemplate = (articles, userId) => html`
            ${articles.length == 0
        ? html`<h2>There are no results found.</h2>`
        : html`
            <ul class="card-wrapper">
                ${articles.map(x => html`${artileTemplate(x, userId)}`)}
            </ul>
            `}
    `

const searchTemplate = (submitHanlder) => html`
    <section id="search">
        <h2>Search by Brand</h2>
    
        <form class="search-wrapper cf" @submit=${submitHanlder}>
            <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
            <button type="submit">Search</button>
        </form>
    
        <h3>Results:</h3>
    
        <div id="search-container">
    
        </div>
    
    </section>
    `;

export const searchView = (ctx) => {
    const userId = ctx.user?._id

    const submitHanlder = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const brand = formData.get('search');

        getSearchedBrand(brand)
            .then(articles => {
                render(resultTemplate(articles, userId), document.getElementById('search-container'))
            })
    }

    ctx.render(searchTemplate(submitHanlder))
}