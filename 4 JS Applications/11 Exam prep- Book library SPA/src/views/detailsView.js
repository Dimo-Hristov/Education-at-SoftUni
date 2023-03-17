import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getDetails } from '../data.js';


const root = document.getElementById('site-content');

const detailsTemplate = (book, currentUser) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            ${currentUser && book._ownerId === currentUser._id
            ? html`<a class="button" href="/edit/${book._id}">Edit</a>
            <a class="button" href="/delete/${book._id}">Delete</a>`
            : nothing}

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            ${currentUser && currentUser._id != book._ownerId
            ? html`<a class="button" href="/like/${book._id}">Like</a>`
            : nothing}


            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`


export const detailsView = (ctx) => {

    getDetails(ctx.params.id)
        .then(book => {
            const currentUser = JSON.parse(localStorage.getItem('user'))
            render(detailsTemplate(book, currentUser), root)
        })
        .catch(err => {
            throw new Error(err.message)
        });

}
