import * as api from './api.js';

const user = api.getUser()


const endPoints = {
    getPosts: '/data/posts?sortBy=_createdOn%20desc',
    addPost: '/data/posts',
    details: '/data/shoes/',
    edit: '/data/shoes/',
    userBooks: `/data/books?where=_ownerId%3D%22${user ? user._id : null}%22&sortBy=_createdOn%20desc`,
    deleteOffer: '/data/shoes/',
    search1: '/data/shoes?where=brand%20LIKE%20%22',
    search2: '%22'
}

export const getAllPosts = () => {
    return api.get(endPoints.getPosts)
}

export const addNewPost = (data) => {
    return api.post(endPoints.addPost, data)
}

export const getDetails = (id) => {
    return api.get(endPoints.details + id)
}

export const editArticle = (data, id) => {
    return api.put(endPoints.edit + id, data)
}

export const getUserBooks = () => {
    return api.get(endPoints.userBooks)
}

export const getSearchedBrand = (brand) => {
    return api.get(endPoints.search1 + brand + endPoints.search2)
}

export const deleteArticle = (ctx) => {

    const confirmed = confirm('Are you sure you want to delete this offer');

    if (confirmed) {
        api.del(endPoints.deleteOffer + ctx.params.id)
            .then(() => {
                ctx.redirect('/dashboard')
            })
            .catch(err => alert(err.message))
    } else {
        return;
    }
}
