const baseUrl = 'http://localhost:3030/jsonstore/games'

export const createGame = (data) => {
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
}

export const getGamesList = async () => {

    const response = await fetch(baseUrl)
    const result = await response.json();
    return Object.values(result)
}