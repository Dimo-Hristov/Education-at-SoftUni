import * as api from './api.js';

const user = api.getUser()


const endPoints = {
    getProducts: '/data/products?sortBy=_createdOn%20desc',
    addProduct: '/data/products',
    details: '/data/products/',
    edit: '/data/products/',
    userBooks: `/data/books?where=_ownerId%3D%22${user ? user._id : null}%22&sortBy=_createdOn%20desc`,
    deleteOffer: '/data/offers/'
}

export const getAllProducts = () => {
    return api.get(endPoints.getProducts)
}

export const addNewProduct = (data) => {
    return api.post(endPoints.addProduct, data)
}

export const getDetails = (id) => {
    return api.get(endPoints.details + id)
}

export const editProduct = (data, id) => {
    return api.put(endPoints.edit + id, data)
}

export const getUserBooks = () => {
    return api.get(endPoints.userBooks)
}

export const deleteOffer = (ctx) => {

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
