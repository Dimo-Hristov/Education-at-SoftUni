import { html, render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');

const template = (cats) => html`
<ul>
    ${cats.map(x => html`
    <li>
        <img src="./images/${x.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <div class="status" style="display: none" id="100">
                <h4>Status Code: ${x.statusCode}</h4>
                <p>${x.statusMessage}</p>
            </div>
            <button class="showBtn">Show status code</button>
        </div>
    </li>`)}
</ul>`;

render(template(cats), root);

root.addEventListener('click', showMore)

function showMore(e) {
    if (e.target.tagName == 'BUTTON') {
        console.log(e.target.parentElement);
        const button = e.target;
        const hiddenDiv = e.target.parentElement.querySelector('div');

        if (hiddenDiv.style.display == 'none') {
            button.textContent = 'Hide status code';
            hiddenDiv.style.display = 'block'
        } else {
            button.textContent = 'Show status code';
            hiddenDiv.style.display = 'none'
        }
    }
}