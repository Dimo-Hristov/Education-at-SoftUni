import { html , nothing} from "../../node_modules/lit-html/lit-html.js";
import * as dashboardService from '../services/dashboardService.js';


const offerTemplate = (offer) => html`
        <!-- Display a div with information about every post (if any)-->
        <div class="offer">
            <img src="${offer.imageUrl}" alt="example1" />
            <p>
                <strong>Title: </strong><span class="title">${offer.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
            <a class="details-btn" href="/offers/${offer._id}">Details</a>
        </div>
`

const dashboardTemplate = (offers) => html`
        <section id="dashboard">
            <h2>Job Offers</h2>
            ${offers.map(offer => offerTemplate(offer))}
            <!-- Display an h2 if there are no posts -->
            ${offers.length == 0 
            ? html`<h2>No offers yet.</h2>`
            : nothing}
            
        </section>
`

export const dashboardView = (ctx) => {
    dashboardService.getDashboard()
        .then(offers => {

            ctx.render(dashboardTemplate(offers))
        })
}