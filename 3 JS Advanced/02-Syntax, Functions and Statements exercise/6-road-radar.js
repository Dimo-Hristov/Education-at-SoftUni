function roadRadar(speed, area) {
    let speedLimit = 0;

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }

    const speedDiference = speed - speedLimit;
    let status = '';
    let isSpeeding = false;

    if (speedDiference > 0 && speedDiference <= 20) {
        status = 'speeding';
        isSpeeding = true;
    } else if (speedDiference > 20 && speedDiference <= 40) {
        status = 'excessive speeding';
        isSpeeding = true;
    } else if (speedDiference > 40) {
        status = 'reckless driving';
        isSpeeding = true;
    }

    if (isSpeeding) {
        console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }

}
roadRadar(40, 'city');
roadRadar(200, 'motorway');

// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit:

// · On the motorway, the limit is 130 km/h

// · On the interstate, the limit is 90 km/h

// · In the city, the limit is 50 km/h

// · Within a residential area, the limit is 20 km/h

// If the driver is within the limits, there should be a printed speed and the speed limit.

// `Driving {speed} km/h in a {speed limit} zone`

// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds.

// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`

// For speeding up to 20 km/h over the limit, the status should be speeding.

// For speeding up to 40 km/h over the limit, the status should be excessive speeding.

// For anything else, status should be reckless driving.

// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.

// The output should be printed on the console.