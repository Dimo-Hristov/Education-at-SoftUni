import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getDetails } from "../api/data.js";

const detailsTemplate = (fruit, userId) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
      <p id="details-title">${fruit.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>${fruit.description}</p>
          <p id="nutrition">Nutrition</p>
          <p id="details-nutrition">${fruit.nutrition}</p>
        </div>
        ${userId === fruit._ownerId
        ? html`<div id="action-buttons">
              <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
              <a href="/delete/${fruit._id}" id="delete-btn">Delete</a>
            </div>`
        : nothing}
      </div>
    </div>
  </section>
`;

export const detailsView = (ctx) => {
    const userId = ctx.user?._id;
    const fruitId = ctx.params.id;

    getDetails(fruitId)
        .then(data => {
            ctx.render(detailsTemplate(data, userId))
        })
        .catch(err => alert(err.message))
}
