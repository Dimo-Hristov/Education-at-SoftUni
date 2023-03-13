import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';
const resultDiv = document.getElementById('result');
const townsDiv = document.getElementById('towns');
document.querySelector('button').addEventListener('click', search);


function search() {
   const searchText = document.getElementById('searchText');

   const template = (towns) => html`
   <ul>
      ${towns.map(x => html`<li class=${searchText.value != '' && x.includes(searchText.value) ? "active"  : "" }>${x}</li>`)}
   </ul>`;

   render(template(towns), townsDiv);
   resultDiv.textContent = `${counter()} matches found`;
}
search();

function counter() {
   let matchesQty = townsDiv.querySelectorAll('.active');

   return matchesQty.length || 'No'
}

