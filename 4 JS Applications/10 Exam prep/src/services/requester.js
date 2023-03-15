

const request = (method, url, data) => {
    let options = {};

    if (method != 'GET') {
        options.method = method
        options.headers = {
            'content-type': 'application/json'
        }

        options.body = JSON.stringify(data);
    }


    return fetch(url, options).then(res => res.json())
}

export const get = request.bind({}, 'GET')
export const post = request.bind({}, 'POST')
export const put = request.bind({}, 'PUT')
export const del = request.bind({}, 'DELETE')