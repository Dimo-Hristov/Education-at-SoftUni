function train(array) {
    let wagons = array.shift().split(' ').map(Number)
    let maxPersonsPerWagon = Number(array.shift())
    let arrayLength = array.length

    for (let i = 0; i < arrayLength; i++) {
        let command = array[i].split(' ')
        if (command.length > 1) {
            wagons.push(command[1])
        } else {
            let personsToAdd = Number(command[0]);
            for (let j = 0; j < wagons.length; j++) {
                let currentWagonPersons = wagons[j]
                if (currentWagonPersons + personsToAdd <= maxPersonsPerWagon) {
                    wagons[j] += personsToAdd
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23', '75',
    'Add 10', 'Add 0', '30', '10', '75'])
// 1. Train

// You will be given an array of strings.

// The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon.

// The second element in the array will be the max capacity of each wagon (single number).

// The rest of the elements will be commands in the following format:

// · Add {passengers} – add a wagon to the end with the given number of passengers.

// · {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)

// At the end, print the final state of the train (all the wagons separated by a space).