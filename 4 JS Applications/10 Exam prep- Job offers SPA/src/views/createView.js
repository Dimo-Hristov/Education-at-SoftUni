import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dashBoardService from '../services/dashboardService.js'

const createTemplate = (submitHandler) => html`
        <section id="create">
            <div class="form">
                <h2>Create Offer</h2>
                <form class="create-form" @submit=${submitHandler} method="POST">
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
    const submitHanlder = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            title: formData.get('title').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            category: formData.get('category').trim(),
            description: formData.get('description').trim(),
            requirements: formData.get('requirements').trim(),
            salary: formData.get('salary').trim(),
        }

        for (const key in data) {

            if (data[key] == '') {
                alert('All field must be fullfiled')
                return
            }
        }

        dashBoardService.create(data)
            .then(() => {
                ctx.page.redirect('/dashboard');
            })
            .catch(error => alert(error))
    }

    ctx.render(createTemplate(submitHanlder))
};