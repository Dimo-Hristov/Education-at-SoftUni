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
