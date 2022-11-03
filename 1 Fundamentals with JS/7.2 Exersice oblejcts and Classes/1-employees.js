function employees(input) {
    let employeesList = [];

    input.forEach(person => {
        let obj = {}
        obj.name = person;
        obj.number = person.length;
        employeesList.push(obj)
    })
    employeesList.forEach(printPerson => {
        console.log(`Name: ${printPerson.name} -- Personal Number: ${printPerson.number}`)
    })
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])

//     You're tasked to create a list of employees and their personal numbers.

// You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included).

// Try to use an object.

// At the end print all the list employees in the following format:

// "Name: {employeeName} -- Personal Number: {personalNum}"