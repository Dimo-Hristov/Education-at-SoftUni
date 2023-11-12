import * as requester from './requester'

const baseUrl = 'http://localhost:3030/jsonstore/games'


export const createGame = async (data) => {
    const result = await requester.post(baseUrl, data)
    return result;
}

export const getGamesList = async () => {
    const result = await requester.get(baseUrl);

    return Object.values(result)
}