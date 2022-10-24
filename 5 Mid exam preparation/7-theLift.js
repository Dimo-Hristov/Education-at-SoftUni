function theLift(input) {
    let waitingPeople = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);
    let maxPersonsPerWagon = 4;

    for (let i = 0; i < wagons.length; i++) {
        let emptySpace = maxPersonsPerWagon - wagons[i]
        if (emptySpace > 0 && waitingPeople >= emptySpace) {
            wagons[i] += emptySpace
            waitingPeople -= emptySpace
        } else if (waitingPeople == 3 && emptySpace >= 3) {
            wagons[i] += 3
            waitingPeople -= 3
        } else if (waitingPeople == 2 && emptySpace >= 2) {
            wagons[i] += 2
            waitingPeople -= 2
        } else if (waitingPeople == 1 && emptySpace >= 1) {
            wagons[i] += 1
            waitingPeople -= 1
        }
    }

    let fulledWagons = wagons.filter(x => x >= 4)


    if (wagons.length == fulledWagons.length && waitingPeople == 0) {
        console.log(wagons.join(' '));
    } else if (wagons.length == fulledWagons.length) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
        console.log(wagons.join(' '));
    } else {
        console.log('The lift has empty spots!');
        console.log(wagons.join(' '));
    }
}
theLift([
    "10",
    "0 2 0"
]
)