function imitationGame(input) {
    let encryptedMessage = input.shift()
    let data = input.shift();

    while (data !== 'Decode') {
        data = data.split('|');
        let command = data[0];

        switch (command) {
            case 'Move':
                let letersToMove = Number(data[1]);
                if (letersToMove > 0) {
                    let stringToMoveAtTheEnd = encryptedMessage.slice(0, letersToMove);
                    let stringLeftOver = encryptedMessage.slice(letersToMove);
                    encryptedMessage = stringLeftOver.concat(stringToMoveAtTheEnd);
                }
                break;

            case 'Insert':
                let indexToInsert = Number(data[1]);
                let valueToInsert = data[2];
                if (indexToInsert >= 0 && valueToInsert.length > 0) {
                    let firstPart = encryptedMessage.slice(0, indexToInsert);
                    let lastPart = encryptedMessage.slice(indexToInsert);
                    encryptedMessage = firstPart.concat(valueToInsert, lastPart);
                }
                break;

            case 'ChangeAll':
                let textToReplace = data[1];
                let replaceWith = data[2];
                while (encryptedMessage.includes(textToReplace)) {
                    encryptedMessage = encryptedMessage.replace(textToReplace, replaceWith);
                }
                break;
        }
        data = input.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage} `);

}
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);

//     You are a mathematician during world war 2, who has joined the cryptography team to decipher the enemy's enigma code. Your job is to create a program to crack the codes.

// On the first line of the input you will receive the encrypted message. After that, until the "Decode" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its true content. There are several types of instructions, split by '|'

// · Move {number of letters}

// o Moves the first n letters to the back of the string.

// · Insert {index} {value}

// o Inserts the given value before the given index in the string.

// · ChangeAll {substring} {replacement}

// o Changes all occurrences of the given substring with the replacement text.

// Input / Constraints

// · On the first line, you will receive a string with message.

// · On the next lines, you will be receiving commands, split by '|' .

// Output

// · After the "Decode" command is received, print this message: "The decrypted message is: {message}"