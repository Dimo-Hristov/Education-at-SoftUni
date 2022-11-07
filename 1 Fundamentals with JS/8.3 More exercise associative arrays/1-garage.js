function garage(input) {
    let garageList = {}

    for (const row of input) {
        // take the garage number and after this the info to add.
        let garageNumber = row.split(' ').shift();
        let carInfo = row.split(garageNumber + ' - ')[1].split(',');
        let newCarDetails = [];

        // make array empty array to push every new car detail into .
        carInfo.forEach(line => {
            let infoToAdd = line.split(':').join(' -');
            newCarDetails.push(infoToAdd);
        });

        //If garage number doesent exist create it.
        if (!garageList[garageNumber]) {
            garageList[garageNumber] = [];
        }
        // push the new car details in the array of garage number
        garageList[garageNumber].push(newCarDetails)
    }

    // print in the follow format
    for (const garage in garageList) {
        console.log(`Garage № ${garage}`);

        for (const car of garageList[garage]) {
            console.log(`--- ${car}`);
        }

    }
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])

//     Write a function that stores cars in garages. You will be given an array of strings. Each string will contain a number of a garage and info about a car. You have to store the car (with its info) in the given garage. The info about the car will be in the format:

// "{key1}: {value1}, {key2}: {value2}…"

// If the garage does not exist, create it. The cars will always be unique. At the end print the result in the format: "Garage № {number}: --- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}… --- {the same for the next car} Garage № {number}: …"

