const baseUrl = 'http://localhost:3030';

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