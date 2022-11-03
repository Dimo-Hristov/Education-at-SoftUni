function flightSchedule(input) {
    let flights = input[0]
    let flightsInfo = [];

    flights.forEach(row => {
        let array = row.split(' ')
        let flightNumber = array.shift();
        let destination = array.join(' '); // if the town name is not one word i find this solution 
        let obj = {
            flightNumber,
            destination,
            status: 'Ready to fly'
        }
        flightsInfo.push(obj)

    });

    let changeStatus = input[1]

    changeStatus.forEach(row => {
        let array = row.split(' ')
        let number = array[0]; // take the flight number who have changes
        let changedStatus = array[1]; // take the changed status
        flightsInfo.forEach(search => {
            if (search.flightNumber == number) { // we search for the flight
                search.status = changedStatus // then we found it we change the status
            }
        })
    })

    let whatToPrint = input[2]

    flightsInfo.forEach(flight => {
        if (flight.status == whatToPrint) {
            console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
        }
    })

}
flightSchedule([['WN269 New York',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'], ['DL2120 Cancelled',

    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
])