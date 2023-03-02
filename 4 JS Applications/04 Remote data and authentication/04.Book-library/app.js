function solve() {
    const loadBtn = document.getElementById('loadBooks');
    const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
    const tBody = document.querySelector('table tbody')

    loadBtn.addEventListener('click', loadAllBooks)



    function loadAllBooks() {

        fetch(baseUrl)
            .then(res => {
                if (!res.ok) alert('Response error')
                return res.json()
            })
            .then(data => {
                Object.values(data).forEach(x => {
                    const tableRow = document.createElement('tr');

                    const titleCell = tableRow.insertCell(0);
                    titleCell.textContent = x.title;

                    const authorCell = tableRow.insertCell(1);
                    authorCell.textContent = x.author;

                    const buttonsTd = tableRow.insertCell(2);

                    const editBtn = document.createElement('button');
                    editBtn.textContent = 'Edit';
                    buttonsTd.appendChild(editBtn);

                    const deleteBtn = document.createElement('button')
                    deleteBtn.textContent = 'Delete';
                    buttonsTd.appendChild(deleteBtn);





                    tBody.appendChild(tableRow)
                })

            })
    }
}
solve()