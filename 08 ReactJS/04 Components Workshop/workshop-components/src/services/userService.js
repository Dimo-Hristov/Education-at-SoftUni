const baseUrl = 'http://127.0.0.1:3005/api/users'

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result.users
}

export const getOne = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    const result = await response.json();
    return result
}

export const createUser = async (userData) => {

    const { country, city, street, streetNumber, ...data } = userData;
    data.address = {
        country, city, street, streetNumber,
    }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result.user;
}
