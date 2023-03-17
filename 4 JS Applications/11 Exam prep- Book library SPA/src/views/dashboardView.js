import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllMovies } from '../api.js';

const root = document.getElementById('site-content');

const movieTemplate = (movie) => html`
<li class="otherBooks">
    <h3>${movie.title}</h3>
    <p>Type: ${movie.type}</p>
    <p class="img"><img src="${movie.imageUrl}"></p>
    <a class="button" href="/details">Details</a>
</li>
`;


const dashboardTemplate = (movies) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    ${movies.length == 0 
    ? html`<p class="no-books">No books in database!</p>`
    : html `<ul class="other-books-list">
        ${movies.map(movie => movieTemplate(movie))}
    </ul>`}
    
    
</section>
`

export const dashboardView = () => {
    getAllMovies()
        .then(res => {
            if (!res.ok) {
                throw new Error('Response error')
            }
            return res.json()
        })
        .then(movies => render(dashboardTemplate(movies), root));
}