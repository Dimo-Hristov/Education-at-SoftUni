import { getUserBooks } from "../data.js";
import { html, render } from '../../node_modules/lit-html/lit-html.js';

const root = document.getElementById('site-content');

const bookTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>
`

const myBooksTemplate = (books) => html`
<!-- My Books Page ( Only for logged-in users ) -->
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list">

        ${books.length == 0
        ? html` <p class="no-books">No books in database!</p>`
        : html`${books.map(book => bookTemplate(book))}`}
</section>
`


export const myBooksView = () => {
    getUserBooks()
        .then(books => {
            render(myBooksTemplate(books), root);
        })
        .catch(err => {
            throw new Error(err.message)
        })
}   