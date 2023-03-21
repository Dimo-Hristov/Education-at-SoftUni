import { html } from '../../node_modules/lit-html/lit-html.js';
import { editProduct, getDetails } from '../api/data.js';

const editTemplate = (product, submitHandler) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Product</h2>
        <form class="edit-form" @submit=${submitHandler}>
            <input type="text" name="name" id="name" placeholder="Product Name" value="${product.name}" />
            <input type="text" name="imageUrl" id="product-image" placeholder="Product Image"
                value="${product.imageUrl}" />
            <input type="text" name="category" id="product-category" placeholder="Category"
                value="${product.category}" />
            <textarea id="product-description" name="description" placeholder="Description" rows="5"
                cols="50">${product.description}</textarea>

            <input type="text" name="price" id="product-price" placeholder="Price" value="${product.price}" />
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export const editView = (ctx) => {
    const productId = ctx.params.id;

    getDetails(productId)
        .then(product => {
            ctx.render(editTemplate(product, submitHandler))
        })
        .catch(err => alert(err.message))

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const imageUrl = formData.get('imageUrl');
        const category = formData.get('category');
        const description = formData.get('description');
        const price = formData.get('price');

        if (name == '' || imageUrl == '' || category == '' || description == '' || price == '') {
            alert('All field must be fullfiled');
            return;
        }

        const data = {
            name,
            imageUrl,
            category,
            description,
            price
        }

        editProduct(data, productId)
            .then(() => {
                ctx.redirect(`/details/${productId}`)
            })
            .catch(err => {
                alert(err.message)
            })
    }
}