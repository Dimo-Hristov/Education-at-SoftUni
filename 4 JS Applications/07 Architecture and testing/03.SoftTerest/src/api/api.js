const host = 'http://localhost:3030'

async function request(method, url, data) {
    const options = {
        method,
        headers: {

        }
    }
    if (data != undefined) {
        options.headers['content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok != true) {
            const error = await response.json()
            throw error.message;
        }

        if (response.status == 204) {
            return response
        } else {
            return response.json()
        }


    } catch (error) {
        alert(error.message)
        throw error;
    }
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export {
    get,
    post,
    put,
    del as delete,
}
