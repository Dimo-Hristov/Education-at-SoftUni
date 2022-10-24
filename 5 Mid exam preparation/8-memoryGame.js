function memoryGame(input) {
    let sequence = input.shift().split(' ')
    let currentLine = input.shift().split(' ')
    let moves = 0;
    let isLose = true

    while (currentLine[0] != 'end') {
        let index1 = Number(currentLine[0]);
        let index2 = Number(currentLine[1]);
        if (index1 == index2 || !sequence[index1] || !sequence[index2]) {
            moves++
            let startIndex = sequence.length / 2
            sequence.splice(startIndex, 0, `-${moves}a`, `-${moves}a`);
            console.log('Invalid input! Adding additional elements to the board');
            currentLine = currentLine = input.shift().split(' ')

            continue;
        }

        if (sequence[index1] != sequence[index2] && sequence[index1] && sequence[index2]) {
            console.log('Try again!');
        }

        if (sequence[index1] == sequence[index2]) {
            let numberToRemove = sequence[index1]
            let filteredArray = sequence.filter(x => x != numberToRemove)
            sequence = filteredArray.slice()
            console.log(`Congrats! You have found matching elements - ${numberToRemove}!`);
            moves++
        }

        if (sequence[1] == undefined) {
            console.log(`You have won in ${moves} turns!`);
            isLose = false;
            break;
        }
        currentLine = currentLine = input.shift().split(' ')
    }

    if (isLose) {
        console.log("Sorry you lose :(");
        console.log(sequence.join(' '));
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])

// Write a program that recreates the Memory game.
// On the first line, you will receive a sequence of elements. Each element in the sequence will have a twin. Until the player receives "end" from the console, you will receive strings with two integers separated by a space, representing the indexes of elements in the sequence.
// If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence, you should add two matching elements at the middle of the sequence in the following format:
// "-{number of moves until now}a"
// Then print this message on the console:
// "Invalid input! Adding additional elements to the board"
// Input
// •	On the first line, you will receive a sequence of elements
// •	On the following lines, you will receive integers until the command "end"
// Output
// •	Every time the player hit two matching elements, you should remove them from the sequence and print on the console the following message:
// "Congrats! You have found matching elements - ${element}!"
// •	If the player hit two different elements, you should print on the console the following message:
// "Try again!"
// •	If the player hit all matching elements before he receives "end" from the console, you should print on the console the following message:
// "You have won in {number of moves until now} turns!"
// •	If the player receives "end" before he hits all matching elements, you should print on the console the following message:
// "Sorry you lose :(
// {the current sequence's state}"
// Constraints
// •	All elements in the sequence will always have a matching element.
