function timeToWalk(stepsToUniversity, stepLengthInMeters, speedKmh) {

    const totalDistanceMeters = stepsToUniversity * stepLengthInMeters;
    const speedInMetersPerSecond = speedKmh / 3.6;
    const rest = Math.floor(totalDistanceMeters / 500) * 60;
    const totalTime = totalDistanceMeters / speedInMetersPerSecond + rest;
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor(totalTime / 60);
    const seconds = Math.round(totalTime % 60);


    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);

// Write a function that calculates how long it takes a student to get to university. The function takes three numbers:

// · The first is the number of steps the student takes from their home to the university

// · Тhe second number is the length of the student's footprint in meters

// · Тhe third number is the student speed in km/h

// Every 500 meters the student rests and takes a 1-minute break.

// Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.

// The input comes as three numbers.

// The output should be printed on the console.