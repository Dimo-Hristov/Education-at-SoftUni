import { html } from "../../node_modules/lit-html/lit-html.js";
import { addNewArticle } from "../api/data.js";

const createTemplate = (submitHanlder) => html`
<section id="create">
    <div class="form">
        <h2>Add item</h2>
        <form class="create-form" @submit=${submitHanlder}>
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" placeholder="Value" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const brand = formData.get('brand').trim();
        const model = formData.get('model').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const release = formData.get('release').trim();
        const designer = formData.get('designer').trim();
        const value = formData.get('value').trim();


        if (brand == '' || model == '' || imageUrl == '' || release == '' || designer == '' || value == '') {
            alert('All field must be fullfiled');
            return;
        }


        const data = {
            brand,
            model,
            imageUrl,
            release,
            designer,
            value
        }


        addNewArticle(data)
            .then(() => {
                ctx.redirect('/dashboard')
            })
            .catch(err => alert(err.message))
    }
    ctx.render(createTemplate(submitHandler));
}