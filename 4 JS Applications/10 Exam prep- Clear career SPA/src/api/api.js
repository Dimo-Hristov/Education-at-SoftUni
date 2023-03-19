const baseUrl = 'http://localhost:3030';

export const getUser = () => JSON.parse(localStorage.getItem('user'));

export const request = (method, url, data) => {
    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = getUser()
    if (user != null) {
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    return fetch(`${baseUrl}${url}`, options)
        .then(res => {
            if (res.ok != true) {
                if (res.status == 403) {
                    localStorage.removeItem('user');
                }
                throw new Error('Invalid email or password')
            }

            if (res.status == 204) {
                return res
            } else {
                return res.json()
            }
        })

}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');