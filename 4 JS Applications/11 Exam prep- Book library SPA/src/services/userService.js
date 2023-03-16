const baseUrl = 'http://localhost:3030';

export const login = (data) => {
    fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Invalid email or password')
            }
            return res.json()
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            alert(`user ${user.email} logged in`)
        })
        .catch(error => alert(error.message));
}

export const register = (data) => {
    fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Response error')
            }
            return res.json()
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            alert(`user ${user.email} logged in`)
        })
        .catch(error => alert(error.message));

}