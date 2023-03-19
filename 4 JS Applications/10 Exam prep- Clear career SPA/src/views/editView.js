import { html } from '../../node_modules/lit-html/lit-html.js';
import { editOffer, getDetails } from "../api/data.js";

const editTemplate = (offer, submitHandler) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form class="edit-form" @submit=${submitHandler}>
            <input type="text" name="title" id="job-title" placeholder="Title" value="${offer.title}" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value="${offer.imageUrl}" />

            <input type="text" name="category" id="job-category" placeholder="Category" value="${offer.category}" />

            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50">
${offer.description}</textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50">
${offer.requirements}</textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" value="${offer.salary}" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export const editView = (ctx) => {
    const offerId = ctx.params.id

    getDetails(offerId).then((offer) => {
        ctx.render(editTemplate(offer, submitHanlder));
    });

    function submitHanlder(e) {
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
        editOffer(data, offerId)
            .then(() => {
                ctx.redirect(`/details/${offerId}`)
            })
            .catch(err => alert(err.message))
    }
};

