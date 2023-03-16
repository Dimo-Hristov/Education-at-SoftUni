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