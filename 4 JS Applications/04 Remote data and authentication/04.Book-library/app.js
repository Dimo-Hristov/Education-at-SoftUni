function solve() {
    const loadBtn = document.getElementById('loadBooks');
    const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
    const tBody = document.querySelector('table tbody');
    tBody.innerHTML = '';
    const formElement = document.querySelector('form')

    const submitBtn = document.querySelector('form button')
    const titleElement = document.querySelector('input[name="title"]');
    const authorElement = document.querySelector('input[name="author"]');

    loadBtn.addEventListener('click', loadAllBooks)
    submitBtn.addEventListener('click', e => addMovie(e))

    function loadAllBooks() {
        tBody.innerHTML = '';
        fetch(baseUrl)
            .then(res => {
                if (!res.ok) throw new Error('Response error')
                return res.json()
            })
            .then(data => {
                Object.entries(data).forEach(x => {
                    const userID = x[0]

                    const tableRow = document.createElement('tr');
                    tableRow.id = userID

                    const titleCell = tableRow.insertCell(0);
                    titleCell.textContent = x[1].title;

                    const authorCell = tableRow.insertCell(1);
                    authorCell.textContent = x[1].author;

                    const buttonsTd = tableRow.insertCell(2);

                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    editBtn.addEventListener('click', e => prepareToEdit(e, x[1].author, x[1].title))
                    buttonsTd.appendChild(editBtn);

                    const deleteBtn = document.createElement('button')
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', e => deleteMovie(e))
                    buttonsTd.appendChild(deleteBtn);

                    tBody.appendChild(tableRow)
                })

            })
            .catch(error => { throw new Error(error.message) })

    }

    function addMovie(e) {
        e.preventDefault()

        if (titleElement.value == '' || authorElement.value == '')
            throw new Error('Title and author must be filled!');

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                author: authorElement.value,
                title: titleElement.value
            })
        })
            .then(res => {
                if (!res.ok)
                    throw new Error('Server didnt respond')
                return res.json()
            })
            .then(data => {
                appendMovie(data)
            })
            .catch(error => { throw new Error(error.message) })



        function appendMovie(data) {
            const tableRow = document.createElement('tr');
            tableRow.id = data._id

            const titleCell = tableRow.insertCell(0);
            titleCell.textContent = titleElement.value;

            const authorCell = tableRow.insertCell(1);
            authorCell.textContent = authorElement.value;

            const buttonsTd = tableRow.insertCell(2);

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', e => prepareToEdit(e, authorElement.value, titleElement.value))
            buttonsTd.appendChild(editBtn);

            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', e => deleteMovie(e))
            buttonsTd.appendChild(deleteBtn);

            tBody.appendChild(tableRow)

            titleElement.value = '';
            authorElement.value = '';
        }
    }

    function prepareToEdit(e, author, title) {
        e.preventDefault()
        const bookID = e.currentTarget.parentNode.parentNode.id;

        document.querySelector('form h3').textContent = 'Edit FORM';

        titleElement.value = title;
        authorElement.value = author;

        submitBtn.style.display = 'none'

        const saveBtn = document.createElement('button')
        saveBtn.textContent = 'Save'
        saveBtn.id = 'saveBtn'
        saveBtn.addEventListener('click', e => editMovie(e, bookID))

        formElement.appendChild(saveBtn)
    }

    function editMovie(e, bookID) {
        e.preventDefault()
        if (titleElement.value == '' || authorElement.value == '')
            throw new Error('Title and author must be filled!');

        fetch(`${baseUrl}/${bookID}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                author: authorElement.value,
                title: titleElement.value
            })
        })
            .then(res => {
                if (!res.ok) throw new Error('Response error')
            })
            .catch(error => { throw new Error(error.message) })

        const titleCell = e.currentTarget.parentNode.parentNode.querySelectorAll('td')[0];
        titleCell.textContent = titleElement.value;

        const authorCell = e.currentTarget.parentNode.parentNode.querySelectorAll('td')[1];
        authorCell.textContent = authorElement.value;

        document.getElementById('saveBtn').remove()


        submitBtn.style.display = 'block'
    }

    function deleteMovie(e,) {
        const bookID = e.currentTarget.parentNode.parentNode.id;

        fetch(`${baseUrl}/${bookID}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (!res.ok) throw new Error('Server response Error')
            })
            .catch(error => { throw new Error(error.message) })

        e.currentTarget.parentNode.parentNode.remove()

    }
}
solve()