import { html } from '../../node_modules/lit-html/lit-html.js';
import { addNewAlbum } from '../api/data.js';

const createTemplate = (submitHandler) => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form class="create-form" @submit=${submitHandler}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const singer = formData.get('singer').trim();
        const album = formData.get('album').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const release = formData.get('release').trim();
        const label = formData.get('label').trim();
        const sales = formData.get('sales').trim();

        if (singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == '') {
            alert('All field must be fullfiled');
            return;
        }

        const data = {
            singer,
            album,
            imageUrl,
            release,
            label,
            sales
        }

        addNewAlbum(data)
            .then(() => {
                ctx.redirect('/dashboard')
            })
            .catch(err => alert(err.message))


    }
    ctx.render(createTemplate(submitHandler))
}