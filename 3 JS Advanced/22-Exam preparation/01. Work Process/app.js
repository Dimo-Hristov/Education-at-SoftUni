function solve() {
    const fnameElement = document.getElementById('fname');
    const lnameElement = document.getElementById('lname');
    const emailElement = document.getElementById('email');
    const birthDateElement = document.getElementById('birth');
    const positionElement = document.getElementById('position');
    const salaryElement = document.getElementById('salary');
    const tbodyElement = document.getElementById('tbody');
    const SumElement = document.getElementById('sum');
    document.getElementById('add-worker').addEventListener('click', addWorker);


    function addWorker(e) {
        e.preventDefault();
        const name = fnameElement.value;
        const lastName = lnameElement.value;
        const email = emailElement.value;
        const birthdate = birthDateElement.value;
        const position = positionElement.value;
        const salary = (salaryElement.value)

        if (!name || !lastName || !email || !birthdate || !position || !salary) {
            return;
        }

        const parentTr = createElement('tr', '',);
        const nametd = createElement('td', name, parentTr);
        const lastNametd = createElement('td', lastName, parentTr);
        const emailtd = createElement('td', email, parentTr);
        const bithDatetd = createElement('td', birthdate, parentTr);
        const positiontd = createElement('td', position, parentTr);
        const salarytd = createElement('td', salary, parentTr)
        const buttonsTD = createElement('td', '', parentTr);
        const fireButton = createElement('button', 'Fired', buttonsTD);
        fireButton.setAttribute('class', 'fired');
        const editButton = createElement('button', 'Edit', buttonsTD);
        editButton.setAttribute('class', 'Edit');

        tbodyElement.appendChild(parentTr);

        SumElement.textContent = (Number(salary) + Number(SumElement.textContent)).toFixed(2);

        fireButton.addEventListener('click', (e) => fireWorker(e, salary))
        editButton.addEventListener('click', (e) => editWorker(e, name, lastName, email, birthdate, position, salary,))

        clearInputFields();
    }

    function createElement(type, content, parent) {
        let element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element)
        }
        return element
    }

    function clearInputFields() {
        fnameElement.value = '';
        lnameElement.value = '';
        emailElement.value = '';
        birthDateElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';
    }

    function fireWorker(e, salary) {
        e.target.parentNode.parentNode.remove();
        SumElement.textContent = (Number(SumElement.textContent) - Number(salary)).toFixed(2);
    }

    function editWorker(e, name, lastName, email, birthdate, position, salary) {
        e.target.parentNode.parentNode.remove();
        SumElement.textContent = (Number(SumElement.textContent) - Number(salary)).toFixed(2);
        fnameElement.value = name;
        lnameElement.value = lastName;
        emailElement.value = email;
        birthDateElement.value = birthdate;
        positionElement.value = position;
        salaryElement.value = salary;
    }
}
solve()