import * as api from './api.js';

const user = api.getUser()


const endPoints = {
    getOffers: '/data/offers?sortBy=_createdOn%20desc',
    addbook: '/data/offers',
    details: '/data/books/',
    edit: '/data/books/',
    userBooks: `/data/books?where=_ownerId%3D%22${user ? user._id : null}%22&sortBy=_createdOn%20desc`,
    deleteBook: '/data/books/'
}

export const getAllOffers = () => {
    return api.get(endPoints.getOffers)
}

export const addNewOffer = (data) => {
    return api.post(endPoints.addbook, data)
}

export const getDetails = (id) => {
    return api.get(endPoints.details + id)
}

export const editMovie = (data, id) => {
    return api.put(endPoints.edit + id, data)
}

export const getUserBooks = () => {
    return api.get(endPoints.userBooks)
}

export const deleteMovie = (ctx) => {
    const movieId = ctx.params.id;

    api.del(endPoints.deleteBook + movieId)
    ctx.redirect('/')
}
