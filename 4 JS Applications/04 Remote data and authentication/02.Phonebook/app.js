function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    const phonebookListElement = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', () => {
        phonebookListElement.innerHTML = ''
        fetch(baseUrl)
            .then(res => {
                if (!res.ok) throw new Error('Error');
                return res.json();
            })
            .then(data => {
                Object.values(data).forEach(x => {
                    const liElement = document.createElement('li');
                    liElement.textContent = `${x.person}: ${x.phone}`;

                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.setAttribute('id', x._id)
                    deleteBtn.addEventListener('click', e => deletePerson(e))

                    liElement.appendChild(deleteBtn)
                    phonebookListElement.appendChild(liElement)
                })
            })
            .catch(error => alert(error.message))

    })

    createBtn.addEventListener('click', () => {
        const personElement = document.getElementById('person');
        const phoneElement = document.getElementById('phone');
        const requestBody = {
            person: personElement.value,
            phone: phoneElement.value,
        }

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
            .then(res => {
                if (!res.ok) throw new Error('Error')
                return res.json()
            })
            .then(data => console.log(data))
            .catch(error => alert(error.message));

        personElement.value = '';
        phoneElement.value = '';
        loadBtn.click()
    })

    function deletePerson(e) {
        fetch(`${baseUrl}/${e.target.id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) throw new Error('Error')
                return res.json()
            })
            .then(data => console.log(data))
            .catch(error => alert(error.message))

        e.currentTarget.parentNode.remove();
    }
}

attachEvents();