import { html } from '../../node_modules/lit-html/lit-html.js';
import { addNewProduct } from '../api/data.js';

const addProductTemplate = (submitHandler) => html`
<section id="create">
    <div class="form">
        <h2>Add Product</h2>
        <form class="create-form" @submit=${submitHandler}>
            <input type="text" name="name" id="name" placeholder="Product Name" />
            <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
            <input type="text" name="category" id="product-category" placeholder="Category" />
            <textarea id="product-description" name="description" placeholder="Description" rows="5"
                cols="50"></textarea>

            <input type="text" name="price" id="product-price" placeholder="Price" />

            <button type="submit">Add</button>
        </form>
    </div>
</section>
`;

export const addProductView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const category = formData.get('category').trim();
        const description = formData.get('description').trim();
        const price = formData.get('price').trim();

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

        addNewProduct(data)
            .then(() => {
                ctx.redirect('/dashboard')
            })
            .catch(err => alert(err.message))
    }

    ctx.render(addProductTemplate(submitHandler))
}