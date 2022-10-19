function movingTarget(input) {
    let sequenceOfTargets = input.shift().split(' ').map(Number)
    let index = 0
    let currentElement = input[index].split(' ')
    let command = currentElement[0]

    while (command != 'End') {
        let indexToShoot = Number(currentElement[1])
        let power = Number(currentElement[2]); // or value or radius

        switch (command) {
            case 'Shoot':
                if (sequenceOfTargets.indexOf(sequenceOfTargets[indexToShoot]) > -1) {
                    sequenceOfTargets[indexToShoot] -= power;
                    if (sequenceOfTargets[indexToShoot] <= 0) {
                        sequenceOfTargets.splice(indexToShoot, 1);
                    }
                }
                break;

            case 'Add':
                if (sequenceOfTargets[indexToShoot]) {
                    sequenceOfTargets.splice(indexToShoot, 0, power) // power is value at this case
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                let startRemoving = sequenceOfTargets[indexToShoot - power] // power is radius at this case 
                let stopRemoving = sequenceOfTargets[indexToShoot + power]
                if (startRemoving && stopRemoving) {
                    sequenceOfTargets.splice(indexToShoot - power, power * 2 + 1)
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
        currentElement = input[++index].split(' ')
        command = currentElement[0];
    }
    console.log(sequenceOfTargets.join('|'));
}
movingTarget((["1 2 3 4 5", "Strike 0 1", "End"]))

// You are at the shooting gallery again, and you need a program that helps you keep track of moving targets. On the first line, you will receive a sequence of targets with their integer values, split by a single space. Then, you will start receiving commands for manipulating the targets until the "End" command. The commands are the following:

// · "Shoot {index} {power}"

// o Shoot the target at the index if it exists by reducing its value by the given power (integer value).

// o Remove the target if it is shot. A target is considered shot when its value reaches 0.

// · "Add {index} {value}"

// o Insert a target with the received value at the received index if it exists.

// o If not, print: "Invalid placement!"

// · "Strike {index} {radius}"

// o Remove the target at the given index and the ones before and after it depending on the radius.

// o If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.

// Example: "Strike 2 2"

// {radius} {radius} {strikeIndex} {radius} {radius}

// · "End"

// o Print the sequence with targets in the following format and end the program:

// "{target1}|{target2}…|{targetn}"

// Input / Constraints

// · On the first line, you will receive the sequence of targets – integer values [1-10000].

// · On the following lines, until the "End" will be receiving the command described above – strings.

// · There will never be a case when the "Strike" command would empty the whole sequence.

// Output

// · Print the appropriate message in case of any command if necessary.

// · In the end, print the sequence of targets in the format described above.