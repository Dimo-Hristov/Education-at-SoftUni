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

//     Valentine's day is coming, and Cupid has minimal time to spread some love across the neighborhood. Help him with his mission!

// You will receive a string with even integers, separated by a "@" - this is our neighborhood. After that, a series of Jump commands will follow until you receive "Love!". Every house in the neighborhood needs a certain number of hearts delivered by Cupid so it can celebrate Valentine's day. The integers in the neighborhood indicate those needed hearts.

// Cupid starts at the position of the first house (index 0) and must jump by a given length. The jump commands will be in this format: "Jump {length}".

// Every time he jumps from one house to another, the needed hearts for the visited house are decreased by 2:

// If the needed hearts for a certain house become equal to 0, print on the console "Place {house_index} has Valentine's day."

// If Cupid jumps to a house where the needed hearts are already 0, print on the console "Place {house_index} already had Valentine's day."

// Keep in mind that Cupid can have a larger jump length than the size of the neighborhood, and if he does jump outside of it, he should start from the first house again (index 0)

// For example, we are given this neighborhood: 6@6@6. Cupid is at the start and jumps with a length of 2. He will end up at index 2 and decrease the needed hearts by 2: [6, 6, 4]. Next, he jumps again with a length of 2 and goes outside the neighborhood, so he goes back to the first house (index 0) and again decreases the needed hearts there: [4, 6, 4].

// Input

// On the first line, you will receive a string with even integers separated by "@" – the neighborhood and the number of hearts for each house.

// On the next lines, until "Love!" is received, you will be getting jump commands in this format: "Jump {length}".

// Output

// In the end, print Cupid's last position and whether his mission was successful or not:

// "Cupid's last position was {last_position_index}."

// If each house has had Valentine's day, print:

// "Mission was successful."

// If not, print the count of all houses that didn't celebrate Valentine's Day:

// "Cupid has failed {houseCount} places." 