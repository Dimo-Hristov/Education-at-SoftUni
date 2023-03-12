import { html, render } from '../node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', renderTowns)

const inputElement = document.getElementById('towns');
const rootElement = document.getElementById('root')

function renderTowns(e) {
    e.preventDefault();

    if (inputElement.value) {
        const towns = inputElement.value.split(', ');

        const templateList = (towns) => html`
        <ul>
            ${towns.map(x => html`<li>${x}</li>`)}
        </ul>`;

        render(templateList(towns), rootElement);
        inputElement.value = '';
    }
}
