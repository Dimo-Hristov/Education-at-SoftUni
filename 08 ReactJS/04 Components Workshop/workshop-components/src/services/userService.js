const baseUrl = 'http://127.0.0.1:3005/users'

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result.users
}
