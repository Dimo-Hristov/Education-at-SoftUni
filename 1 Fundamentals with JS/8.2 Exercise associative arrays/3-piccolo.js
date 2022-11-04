function piccolo(input) {
    let carList = {};

    // make a list of cars, if command is OUT delete the car from the list.
    for (const entry of input) {
        let [command, regNumber] = entry.split(', ')

        if (command == 'IN') {
            carList[regNumber] = 'IN'
        } else {
            delete carList[regNumber];
        }
    }
    // sort by registration number and prin them.
    // if the list is empty print "Parking Lot is Empty".
    let kvpArr = Object.entries(carList);
    if (kvpArr.length < 1) {
        return console.log('Parking Lot is Empty');
    }
    kvpArr.sort(([regNumA], [regNumB]) => regNumA.localeCompare(regNumB));
    kvpArr.forEach(row => console.log(row[0])) // at 0 index is the registration num of car.
}
piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'OUT, CA1234TA'])

//     Write a function that:

// · Records a car number for every car that enters the parking lot

// · Removes a car number when the car goes out

// · Input will be an array of strings in format [direction, carNumber]

// Print the output with all car numbers which are in the parking lot sorted in ascending by number.

// If the parking lot is empty, print: "Parking Lot is Empty".