import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getSearchedFruit } from "../api/data.js";


const fruitTemplate = (fruit) => html`
      <div class="fruit">
        <img src="${fruit.imageUrl}" alt="example1" />
        <h3 class="title">${fruit.name}</h3>
        <p class="description">
          ${fruit.description}
        </p>
        <a class="details-btn" href="/details/${fruit._id}">More Info</a>
      </div>
`;

const resultTemplate = (fruits) => html`
    ${fruits.length == 0
        ? html`<p class="no-result">No result.</p>`
        : html`
        
        ${fruits.map(x => fruitTemplate(x))}
        `}
`;

const searchTemplate = (submitHanlder) => html`
  <section id="search">
    <div class="form">
      <h2>Search</h2>
      <form class="search-form" @submit=${submitHanlder}>
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
    </div>
  </section>
`;

export const searchView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const nameToSearch = formData.get('search');

        if (nameToSearch == '') {
            alert('All field must be fullfiled');
            return;
        }

        getSearchedFruit(nameToSearch)
            .then(data => {
                render(resultTemplate(data), document.querySelector('.search-result'))
            })

    }

    ctx.render(searchTemplate(submitHandler))
}
