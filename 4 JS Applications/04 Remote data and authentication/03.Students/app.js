function solve() {
    const tableBodyElement = document.querySelector('#results tbody');
    const url = 'http://localhost:3030/jsonstore/collections/students';

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error('Error')
            return res.json()
        })
        .then(data => {
            Object.values(data).forEach(x => {
                const tableRowElement = document.createElement('tr');

                const firstNameCell = tableRowElement.insertCell(0);
                firstNameCell.textContent = x.firstName;

                const lastnameCell = tableRowElement.insertCell(1);
                lastnameCell.textContent = x.lastName;

                const facultyNumber = tableRowElement.insertCell(2);
                facultyNumber.textContent = x.facultyNumber;

                const grade = tableRowElement.insertCell(3);
                grade.textContent = x.grade
                console.log(x);
                tableBodyElement.appendChild(tableRowElement)
            })
        })

}
solve()