function needForspeed(input) {
    let totalCars = Number(input.shift());
    let carList = {}
    const maxCarFuel = 75;

    for (let i = 0; i < totalCars; i++) {
        let currentCarInfo = input.shift().split('|');
        let carType = currentCarInfo[0];
        let carMileage = Number(currentCarInfo[1]);
        let carFuel = Number(currentCarInfo[2]);

        carList[carType] = { carMileage, carFuel }
    }

    let currentLine = input.shift();

    while (currentLine !== 'Stop') {
        currentLine = currentLine.split(' : ');
        let command = currentLine.shift();

        switch (command) {
            case 'Drive': {
                let [car, distance, neededFuel] = currentLine;
                distance = Number(distance);
                neededFuel = Number(neededFuel);

                if (carList[car].carFuel < neededFuel) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    carList[car].carMileage += distance;
                    carList[car].carFuel -= neededFuel;
                    console.log(`${car} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`);

                    if (carList[car].carMileage >= 100000) {
                        console.log(`Time to sell the ${car}!`);
                        delete carList[car];
                    }
                }
            } break;

            case 'Refuel': {
                let [car, fuel] = currentLine;
                fuel = Number(fuel);

                if ((carList[car].carFuel + fuel) > maxCarFuel) {
                    let refuelLiters = maxCarFuel - carList[car].carFuel;
                    carList[car].carFuel = maxCarFuel;

                    console.log(`${car} refueled with ${refuelLiters} liters`);

                } else {
                    carList[car].carFuel += fuel;
                    console.log(`${car} refueled with ${fuel} liters`);
                }



            } break;

            case 'Revert': {
                let [car, distance] = currentLine;
                carList[car].carMileage -= distance;

                if (carList[car].carMileage < 10000) {
                    carList[car].carMileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${distance} kilometers`);
                }
            } break;
        }

        currentLine = input.shift();
    }

    for (const car in carList) {
        console.log(`${car} -> Mileage: ${carList[car].carMileage} kms, Fuel in the tank: ${carList[car].carFuel} lt.`);
    }
}
needForspeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);



// You have just bought the latest and greatest computer game – Need for Seed III. Pick your favorite cars and drive them all you want! We know that you can't wait to start playing.
// On the first line of the standard input, you will receive an integer n – the number of cars that you can obtain. On the next n lines, the cars themselves will follow with their mileage and fuel available, separated by "|" in the following format:
// "{car}|{mileage}|{fuel}"
// Then, you will be receiving different commands, each on a new line, separated by " : ", until the "Stop" command is given:
// •	"Drive : {car} : {distance} : {fuel}":
// o	You need to drive the given distance, and you will need the given fuel to do that. If the car doesn't have enough fuel, print: "Not enough fuel to make that ride"
// o	If the car has the required fuel available in the tank, increase its mileage with the given distance, decrease its fuel with the given fuel, and print:
// "{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
// o	You like driving new cars only, so if a car's mileage reaches 100 000 km, remove it from the collection(s) and print: "Time to sell the {car}!"
// •	"Refuel : {car} : {fuel}":
// o	Refill the tank of your car.
// o	Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than you can fit in the tank, take only what is required to fill it up.
// o	Print a message in the following format: "{car} refueled with {fuel} liters"
// •	"Revert : {car} : {kilometers}":
// o	Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it with in the following format:
// "{car} mileage decreased by {amount reverted} kilometers"
// o	If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and
// DO NOT print anything.
// Upon receiving the "Stop" command, you need to print all cars in your possession in the following format:
// "{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."
// Input/Constraints
// •	The mileage and fuel of the cars will be valid, 32-bit integers, and will never be negative.
// •	The fuel and distance amounts in the commands will never be negative.
// •	The car names in the commands will always be valid cars in your possession.
// Output
// •	All the output messages with the appropriate formats are described in the problem description.
