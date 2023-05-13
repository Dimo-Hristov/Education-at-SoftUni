import * as api from './api.js';

const endPoints = {
    getFruits: '/data/fruits?sortBy=_createdOn%20desc',
    addFruit: '/data/fruits',
    details: '/data/fruits/',
    edit: '/data/fruits/',
    deleteFruit: '/data/fruits/',
    search1: '/data/fruits?where=name%20LIKE%20%22',
    search2: '%22'
}

export const getAllFruits = () => {
    return api.get(endPoints.getFruits)
}

export const addNewFruit = (data) => {
    return api.post(endPoints.addFruit, data)
}

export const getDetails = (id) => {
    return api.get(endPoints.details + id)
}

export const editFruit = (data, id) => {
    return api.put(endPoints.edit + id, data)
}

export const getSearchedFruit = (name) => {
    return api.get(endPoints.search1 + name + endPoints.search2)
}

export const deleteFruit = (ctx) => {

    const confirmed = confirm('Are you sure you want to delete this offer');

    if (confirmed) {
        api.del(endPoints.deleteFruit + ctx.params.id)
            .then(() => {
                ctx.redirect('/dashboard')
            })
            .catch(err => alert(err.message))
    } else {
        return;
    }
}
