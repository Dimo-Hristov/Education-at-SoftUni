function secretChat(input) {
    let text = input.shift();

    commandsExecutor(input)

    console.log(`You have a new text message: ${text}`);

    function commandsExecutor(input) {
        let data = input.shift();

        while (data !== 'Reveal') {
            data = data.split(':|:');
            let command = data.shift();

            switch (command) {
                case 'InsertSpace':
                    let indexToInsertSpace = data.shift();

                    let firstString = text.slice(0, indexToInsertSpace);
                    let secondString = text.slice(indexToInsertSpace);

                    text = firstString.concat(' ', secondString);
                    console.log(text);

                    break;
                case 'Reverse':
                    let stringToReverse = data.shift();

                    if (text.includes(stringToReverse)) {
                        let reversedString =
                            stringToReverse.split('')
                                .reverse()
                                .join('')

                        text = text.replace(stringToReverse, '');
                        text = text.concat(reversedString);

                        console.log(text);

                    } else {
                        console.log('error');
                    }
                    break;

                case 'ChangeAll':
                    let [substring, replacement] = data;

                    while (text.includes(substring)) {
                        text = text.replace(substring, replacement)
                    }
                    console.log(text);
                    break;
            }

            data = input.shift();
        }
    }
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);

//     You have plenty of free time, so you decide to write a program that conceals and reveals your received messages. Go ahead and type it in!
// On the first line of the input, you will receive the concealed message. After that, until the "Reveal" command is given, you will receive strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its actual content. There are several types of instructions, split by ":|:"
// •	"InsertSpace:|:{index}":
// o	Inserts a single space at the given index. The given index will always be valid.
// •	"Reverse:|:{substring}":
// o	If the message contains the given substring, cut it out, reverse it and add it at the end of the message.
// o	If not, print "error".
// o	This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
// •	"ChangeAll:|:{substring}:|:{replacement}":
// o	Changes all occurrences of the given substring with the replacement text.
// Input / Constraints
// •	On the first line, you will receive a string with a message.
// •	On the following lines, you will be receiving commands, split by ":|:".
// Output
// •	After each set of instructions, print the resulting string.
// •	After the "Reveal" command is received, print this message:
// "You have a new text message: {message}"
