import { editMovie, getDetails } from '../api.js';
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';

const root = document.getElementById('site-content');
let movieId = '';

const editTemplate = (movie) => html`
<!-- Edit Page ( Only for the creator )-->
<section id="edit-page" class="edit">
    <form id="edit-form" action="#" method="" @submit="${submitHandler}">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">${movie.title}</label>
                <span class="input">
                    <input type="text" name="title" id="title" value="${movie.title}">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description">${movie.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value="${movie.imageUrl}">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value="Fiction">
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>

`;

export const editView = (ctx) => {
    movieId = ctx.params.id;
    getDetails(movieId)
        .then(res => {
            if (!res.ok) {
                throw new Error('Response error')
            }
            return res.json()
        })
        .then(movie => render(editTemplate(movie), root))
        .catch(err => {
            throw new Error(err.message)
        })

};

function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const imageUrl = formData.get('imageUrl').trim();
    const type = formData.get('type').trim();

    const data = {
        title,
        description,
        imageUrl,
        type
    }

    if (title == '' || description == '' || imageUrl == '' || type == '') {
        alert('All field must be fullfiled');
        return
    }

    editMovie(data, movieId)
        .then(res => {
            if (!res.ok) {
                throw new Error('Response error');
            }
            return res.json();
        })
        .then(() => {
            page.redirect(`/details/${movieId}`)
        })
        .catch(err => {
            throw new Error(err.message)
        });

}