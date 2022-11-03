function adressbook(input) {
    let adresbookList = {};

    for (const line of input) {
        let [name, adress] = line.split(':');

        adresbookList[name] = adress;
    }

    let adresbookListArray = Object.entries(adresbookList);

    adresbookListArray.sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

    adresbookListArray.forEach(row => {
        let [name, adress] = row
        console.log(`${name} -> ${adress}`);
    });
}
adressbook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])

    // Write a function that stores information about a person’s name and his address. The input comes as an array of strings. Each string contains the name and the address separated by a colon. If you receive the same name twice just replace the address. In the end, print the full list, sorted alphabetically by the person’s nam