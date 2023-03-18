import { html } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { addNewBook } from '../api/data.js';


const addBookTemplate = () => html`
<section id="create-page" class="create">
    <form id="create-form" action="" method="" @submit=${submitHandler}>
        <fieldset>
            <legend>Add new Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" placeholder="Title">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" placeholder="Image">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type">
                        <option value="Fiction">Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Add Book">
        </fieldset>
    </form>
</section>
`

function submitHandler() {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get('title');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl');
    const type = formData.get('type');

    if (title == '' || description == '' || imageUrl == "" || type == '') {
        alert('All fields must be fullfiled');
        return
    }

    const data = {
        title,
        description,
        imageUrl,
        type
    }
    addNewBook(data)
        .then(() => {
            page.redirect('/')
        })
        .catch(err => {
            throw new Error(err.message)
        })
}

export const addBookView = (ctx) => {
    ctx.render(addBookTemplate(ctx))
}