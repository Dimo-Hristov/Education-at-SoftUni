import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFruits } from "../api/data.js";


const fruitTemplate = (fruit) => html`
 <div class="fruit">
            <img src="${fruit.imageUrl}" alt="example1" />
            <h3 class="title">${fruit.name}</h3>
            <p class="description">${fruit.description}</p>
            <a class="details-btn" href="/details/${fruit._id}">More Info</a>
          </div>
`;

const dashboardTemplate = (fruits) => html`
        <!-- Dashboard page -->
        <h2>Fruits</h2>

        ${fruits.length == 0
        ? html`<h2>No fruit info yet.</h2>`
        : html`
        <section id="dashboard">
          ${fruits.map(x => fruitTemplate(x))}
          </section>`}      
`;

export const dashboardView = (ctx) => {
    getAllFruits()
        .then(data => {
            ctx.render(dashboardTemplate(data))
        })
        .catch(err => alert(err.message))
}