import { html } from '../../node_modules/lit-html/lit-html.js';
import { addNewOffer } from '../api/data.js';
import page from '../../node_modules/page/page.mjs';

const createTemplate = (submitHandler) => html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form class="create-form" @submit=${submitHandler}>
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export const createView = (ctx) => {


    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get('title').trim()
        const imageUrl = formData.get('imageUrl').trim()
        const category = formData.get('category').trim()
        const description = formData.get('description').trim()
        const requirements = formData.get('requirements').trim()
        const salary = formData.get('salary').trim()

        if (title == '' || imageUrl == '' || category == '' || description == '' || requirements == '' || salary == '') {
            alert('All field must be fullfiled');
            return
        }
        const data = {
            title,
            imageUrl,
            category,
            description,
            requirements,
            salary,
        }

        addNewOffer(data)
            .then(() => {
                page.redirect('/dashboard')
            })
            .catch(err => alert(err.message))
    }


    ctx.render(createTemplate(submitHandler))
}