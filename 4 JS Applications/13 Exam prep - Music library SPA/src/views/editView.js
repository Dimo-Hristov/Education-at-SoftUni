import { html } from '../../node_modules/lit-html/lit-html.js';
import { editAlbum, getDetails } from '../api/data.js';

const editTemplate = (album, submitHanlder) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Album</h2>
            <form class="edit-form" @submit=${submitHanlder}>
                <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value="${album.singer}" />
                <input type="text" name="album" id="album-album" placeholder="Album" value="${album.album}" />
                <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value="${album.imageUrl}" />
                <input type="text" name="release" id="album-release" placeholder="Release date" value="${album.release}" />
                <input type="text" name="label" id="album-label" placeholder="Label" value="${album.label}" />
                <input type="text" name="sales" id="album-sales" placeholder="Sales" value="${album.sales}" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

export const editView = (ctx) => {
    const albumId = ctx.params.id;

    getDetails(albumId)
        .then(album => {
            ctx.render(editTemplate(album, submitHanlder))
        })

    function submitHanlder(e) {
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

        editAlbum(data, albumId)
            .then(() => {
                ctx.redirect(`/details/${albumId}`)
            })
            .catch(err => alert(err.message))

    }
}

