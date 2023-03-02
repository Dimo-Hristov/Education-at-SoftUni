function attachEvents() {
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const textAreaElement = document.getElementById('messages');
    const url = 'http://localhost:3030/jsonstore/messenger';

    refreshBtn.addEventListener('click', () => {
        textAreaElement.innerHTML = '';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    alert('Response was not ok');
                }
                return response.json();
            })
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
        const authorElement = document.querySelector('input[name="author"');
        const messageElement = document.querySelector('input[name="content"]');
        const postRequiest = {
            author: authorElement.value.trim(),
            content: messageElement.value.trim(),
        }

        if (authorElement.value == '' || messageElement.value == '')
            return

        fetch(url, {

            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(postRequiest)
        })
            .then(response => {
                if (!response.ok) {
                    alert('Response was not ok');
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => alert(error.message))

        authorElement.value = '';
        messageElement.value = '';
        refreshBtn.click()
    })
}

attachEvents();