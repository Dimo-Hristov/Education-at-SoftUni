import { html , nothing} from "../../node_modules/lit-html/lit-html.js";
import * as dashboardService from '../services/dashboardService.js';

// {
//     "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
//     "title": "Invoice Administrator",
//     "imageUrl": "../images/example3.png",
//     "category": "Finance, Administration, Data Capture",
//     "description": "The manager will oversee quality assurance, quality control, and customer service regarding the invoicing process; ensure adherence to proper invoicing procedures; and interpret and clarify invoicing policies. We are looking for individuals who have a passion for making a difference in the lives of people around the world.",
//     "requirements": "Experience with SQL-based accounting software and demonstrated ability to learn and operate new systems in a short period. Experience with accounts payable, general ledger, and client invoicing. Experience with accounting software; Solomon IV experience preferred. Ability to solve technical, managerial, or operational problems and evaluate options based on relevant information, resources, well-rounded experience, and knowledge.",
//     "salary": "1700",
//     "_createdOn": 1617194295480,
//     "_id": "136777f5-3277-42ad-b874-76d043b069cb"
// }

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