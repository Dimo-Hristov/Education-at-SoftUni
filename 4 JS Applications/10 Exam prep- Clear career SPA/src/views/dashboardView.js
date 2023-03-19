import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../api/data.js';



const offerTemplate = (offer) => html`
<div class="offer">
    <img src="./images/example1.png" alt="example1" />
    <p>
        <strong>Title: </strong><span class="title">${offer.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
    <a class="details-btn" href="/details/${offer._id}">Details</a>
</div>
`

const dashboardTemplate = (offers) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${offers.length == 0 ?
    html`<h2>No offers yet.</h2>`
        : html`${offers.map(x => offerTemplate(x))}`}
</section>
    `;

export const dashboardView = (ctx) => {
    getAllOffers()
        .then(offers => {
            console.log(offers);
            ctx.render(dashboardTemplate(offers))
        })
        .catch(err => alert(err.message))

}