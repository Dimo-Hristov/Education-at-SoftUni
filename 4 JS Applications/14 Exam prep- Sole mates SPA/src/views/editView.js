import { html } from "../../node_modules/lit-html/lit-html.js";
import { editArticle, getDetails } from "../api/data.js";

const editTemplate = (article, submitHanlder) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit item</h2>
            <form class="edit-form" @submit=${submitHanlder}>
                <input type="text" name="brand" id="shoe-brand" placeholder="Brand" value="${article.brand}" />
                <input type="text" name="model" id="shoe-model" placeholder="Model" value="${article.model}" />
                <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" value="${article.imageUrl}" />
                <input type="text" name="release" id="shoe-release" placeholder="Release date" value="${article.release}" />
                <input type="text" name="designer" id="shoe-designer" placeholder="Designer" value="${article.designer}" />
                <input type="text" name="value" id="shoe-value" placeholder="Value" value="${article.value}" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>;
`;

export const editView = (ctx) => {
    const articleId = ctx.params.id;

    const submitHanlder = (e) => {
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

        editArticle(data, articleId)
            .then(() => {
                ctx.redirect(`/details/${articleId}`)
            })
            .catch(err => alert(err.message))
    }

    getDetails(articleId)
        .then(article => {
            ctx.render(editTemplate(article, submitHanlder))
        })
        .catch(err => alert(err.message))
}
