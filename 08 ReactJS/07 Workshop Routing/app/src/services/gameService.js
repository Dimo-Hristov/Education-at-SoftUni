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