function passwordReset(input) {
    let password = input.shift();
    let currentLine = input.shift();

    while (currentLine !== 'Done') {
        currentLine = currentLine.split(' ');
        let command = currentLine.shift();

        switch (command) {
            case 'TakeOdd':
                let oddString = ''
                for (let i = 1; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        oddString += password[i];
                    }
                }
                password = oddString;
                console.log(password);
                break;

            case 'Cut':
                let index = Number(currentLine.shift());
                let length = Number(currentLine.shift());
                let textToCut = password.slice(index, index + length);
                password = password.replace(textToCut, '');
                console.log(password);
                break;

            case 'Substitute':
                let [substring, substitude] = currentLine;
                let isReplaced = false

                while (password.includes(substring)) {
                    isReplaced = true
                    password = password.replace(substring, substitude);
                }

                if (isReplaced) {
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }

        currentLine = input.shift();
    }

    console.log(`Your password is: ${password}`);

}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);


//     Yet again, you have forgotten your password. Naturally, it's not the first time this has happened. Actually, you got so tired of it that you decided to help yourself with an intelligent solution.
// Write a password reset program that performs a series of commands upon a predefined string. First, you will receive a string, and afterward, until the command "Done" is given, you will be receiving strings with commands split by a single space. The commands will be the following:
// •	"TakeOdd"
// o	 Takes only the characters at odd indices and concatenates them to obtain the new raw password and then prints it.
// •	"Cut {index} {length}"
// o	Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
// o	The given index and the length will always be valid.
// •	"Substitute {substring} {substitute}"
// o	If the raw password contains the given substring, replaces all of its occurrences with the substitute text given and prints the result.
// o	If it doesn't, prints "Nothing to replace!".
// Input
// •	You will be receiving strings until the "Done" command is given.
// Output
// •	After the "Done" command is received, print:
// o	"Your password is: {password}"
// Constraints
// •	The indexes from the "Cut {index} {length}" command will always be valid.

