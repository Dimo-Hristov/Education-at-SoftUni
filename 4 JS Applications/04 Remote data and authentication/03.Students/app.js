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

        const firstName = firstnameElement.value;
        const lastName = lastnameElement.value;
        const facultyNumber = facultyElement.value;
        const grade = gradeElement.value;

        if (typeof firstName != 'string' || typeof lastName != 'string')
            throw new Error('Error');


        if (!firstName || !lastName || !Number(facultyNumber) || !Number(grade))
            throw new Error('Error');


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                facultyNumber,
                grade,
            })
        })
            .then(res => {
                if (!res.ok) throw new Error('Error')
            })
            .catch(error => {
                throw new Error(error.message)
            })

        const tableRowElement = document.createElement('tr');

        const firstNameCell = tableRowElement.insertCell(0);
        firstNameCell.textContent = firstName;

        const lastnameCell = tableRowElement.insertCell(1);
        lastnameCell.textContent = lastName;

        const facultyNumberCell = tableRowElement.insertCell(2);
        facultyNumber.textContent = facultyNumber;

        const gradeCell = tableRowElement.insertCell(3);
        grade.textContent = grade

        tableBodyElement.appendChild(tableRowElement)

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