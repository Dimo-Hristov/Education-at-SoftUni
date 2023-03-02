function attachEvents() {
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const textAreaElement = document.getElementById('messages');
    const url = 'http://localhost:3030/jsonstore/messenger';

    refreshBtn.addEventListener('click', () => {
        textAreaElement.innerHTML = '';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const comments = [];

                Object.values(data).forEach(x => {
                    comments.push(`${x.author}: ${x.content}`)
                })
                textAreaElement.textContent = comments.join('\n')
            })
            .catch(error => alert(error.message))
    })

    sendBtn.addEventListener('click', () => {

    })
}

attachEvents();