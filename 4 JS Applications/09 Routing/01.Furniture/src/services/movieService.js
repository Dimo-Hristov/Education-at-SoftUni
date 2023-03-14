const baseUrl = 'http://localhost:3030/data/movies';

export const getAll = () => fetch(baseUrl).then(res => res.json())