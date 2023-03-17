const baseUrl = 'http://localhost:3030';
import page from '../node_modules/page/page.mjs';

export const registerUser = (data) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const loginUser = (data) => {
    return fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const logoutUser = (accesstoken) => {
    return fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accesstoken
        },
    })
}

export const addNewBook = (data) => {
    const accesstoken = JSON.parse(localStorage.getItem('user')).accessToken;
    return fetch(`${baseUrl}/data/books`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accesstoken
        },
        body: JSON.stringify(data)
    })
}

export const getAllMovies = () => {
    return fetch(`${baseUrl}/data/books?sortBy=_createdOn%20desc`)
}

export const getDetails = (id) => {
    return fetch(`${baseUrl}/data/books/${id}`)
}

export const editMovie = (data, id) => {
    const currentUser = JSON.parse(localStorage.getItem('user'))
    return fetch(`${baseUrl}/data/books/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': currentUser.accessToken
        },
        body: JSON.stringify(data)
    })
}

export const deleteMovie = (ctx) => {
    const currentUser = JSON.parse(localStorage.getItem('user'))
    const movieId = ctx.params.id;

    fetch(`${baseUrl}/data/books/${movieId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': currentUser.accessToken
        },
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('response error')
            }
            return res.json()
        })
        .then(() => {
            page.redirect('/')
        })
}