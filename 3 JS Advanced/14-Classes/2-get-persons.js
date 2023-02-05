function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    let personsList = [];

    let firstPerson = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    personsList.push(firstPerson);
    let secondPerson = new Person('SoftUni');
    personsList.push(secondPerson);
    let thirdPerson = new Person('Stephan', 'Johnson', 25);
    personsList.push(thirdPerson);
    let fourthPerson = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    personsList.push(fourthPerson);

    return personsList
}
getPersons();

// Write a function that returns an array of Person objects. Use the class from the previous task, create the following instances, and return them in an array:

// Input / Output

// There will be no input, the data is static and matches the table above. As output, return an array with Person instances.

// Submit a function that returns the required output.
