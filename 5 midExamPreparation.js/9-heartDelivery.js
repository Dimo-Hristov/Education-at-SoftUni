function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number)
    let currentLine = input.shift().split(' ')
    let cupidindexPosition = 0
    let decrease = 2;
    let borderIndex = neighborhood.length - 1

    while (currentLine[0] != 'Love!') {
        let indexesToMove = Number(currentLine[1]);
        cupidindexPosition += indexesToMove

        if (cupidindexPosition > borderIndex) {
            cupidindexPosition = 0
        }

        if (neighborhood[cupidindexPosition] == 0) {
            console.log(`Place ${cupidindexPosition} already had Valentine's day.`);
            currentLine = input.shift().split(' ')
            continue;
        }

        neighborhood[cupidindexPosition] -= decrease;

        if (neighborhood[cupidindexPosition] == 0) {
            console.log(`Place ${cupidindexPosition} has Valentine's day.`);
        }
        currentLine = input.shift().split(' ')
    }
    let missedHouses = neighborhood.filter(x => x > 0)

    console.log(`Cupid's last position was ${cupidindexPosition}.`);
    if (missedHouses.length == 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${missedHouses.length} places.`);
    }

}
heartDelivery(["2@4@2",

    "Jump 2",

    "Jump 2",

    "Jump 8",

    "Jump 3",

    "Jump 1",

    "Love!"]) 