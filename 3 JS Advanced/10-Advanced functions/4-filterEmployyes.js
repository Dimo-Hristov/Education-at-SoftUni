function filterEmployyes(data, criteria) {
    let [prop, value] = criteria.split('-')
    let employeesList = JSON.parse(data)


    employeesList
        .filter(x => x[prop] == value)
        .map((x, index) => `${index}. ${x.first_name} ${x.last_name} - ${x.email}`)
        .forEach(x => console.log(x))
}
filterEmployyes(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"    
    }, {    
    "id": "2",    
    "first_name": "Kizzee",   
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"},
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"}]`,
    'gender-Female');


//     Write a program that filters the employees of your company. You should print the result in a specific format. You will receive 2 parameters (data, criteria). You should parse the input, find all employees that fulfill the criteria, and print them.

// Input

// You will receive a string with all the employees, and criteria by which you should sort the employees. If the criteria are "all" print all the employees in the given format.

// Output

// The output should be printed on the console.

// For more information check the examples.