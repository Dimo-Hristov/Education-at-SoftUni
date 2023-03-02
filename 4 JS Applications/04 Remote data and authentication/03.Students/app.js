function solve() {
    const tableBodyElement = document.querySelector('#results tbody');
    const url = 'http://localhost:3030/jsonstore/collections/students';

    loadStudents();

    document.getElementById('submit').addEventListener('click', e => addStudent(e))


    function addStudent(e) {
        e.preventDefault()
        const firstnameElement = document.querySelector('input[name="firstName"]');
        const lastnameElement = document.querySelector('input[name="lastName"]');
        const facultyElement = document.querySelector('input[name="facultyNumber"]');
        const gradeElement = document.querySelector('input[name="grade"]');

        if (!firstnameElement.value || !lastnameElement.value
            || !facultyElement.value || !Number(gradeElement.value))
            return

        const newStudent = {
            firstName: firstnameElement.value,
            lastName: lastnameElement.value,
            facultyNumber: facultyElement.value,
            grade: gradeElement.value,
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newStudent)
        })
            .then(res => {
                if (!res.ok) throw new Error('Error')
            })
            .catch(error => {
                throw new Error(error.message)
            })
        tableBodyElement.innerHTML = ''
        loadStudents()
    }

    function loadStudents() {
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

                    tableBodyElement.appendChild(tableRowElement)
                })
            })
    }
}
solve()