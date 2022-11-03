function phonebook(input) {
    let phonebookList = {};

    for (const row of input) {
        let [name, phoneNumber] = row.split(' ');
        phonebookList[name] = phoneNumber
    }

    for (const person in phonebookList) {
        console.log(`${person} -> ${phonebookList[person]}`);
    }

}
phonebook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344'])

    // Write a function that stores information about a person’s name and phone number. The input is an array of strings with space-separated name and number. Replace duplicate names. Print the result as shown.