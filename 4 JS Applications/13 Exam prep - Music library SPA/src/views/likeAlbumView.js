import { sendLike } from "../api/data.js";

export const likeAlbumView = (ctx) => {

    const albumId = ctx.params.id;
    const data = {
        albumId,
    }

    sendLike(data)
        .then(() => {

            ctx.redirect(`/details/${albumId}`);
            document.getElementById('like-btn').remove()
        })
        .catch(err => alert(err.message))
}