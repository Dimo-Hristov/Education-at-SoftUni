function valueOfstring(input) {
    let text = input[0];
    let type = input[1].toLowerCase()
    let sum = 0;

    if (type == 'lowercase') {
        for (const char of text) {
            let charDigit = char.charCodeAt()
            if ((charDigit >= 97 && charDigit <= 122)) {
                sum += charDigit
            }
        }
    } else {
        for (const char of text) {
            let charDigit = char.charCodeAt()
            if ((charDigit >= 65 && charDigit <= 90)) {
                sum += charDigit
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}
valueOfstring(['HelloFromMyAwesomePROGRAM',

    'LOWERCASE'])


//     1. Value of a String

// Write a function, which finds the sum of the ASCII codes of the letters in a given string. Your tasks will be a bit harder because you will have to find the sum of either the lowercase or the uppercase letters.

// On the first line, you will receive the string.

// On the second line, you will receive one of two possible inputs:

// · If you receive "UPPERCASE" è find the sum of all uppercase English letters in the previously received string

// · If you receive "LOWERCASE" è find the sum of all lowercase English letters in the previously received string

// You should not sum the ASCII codes of any characters, which are not letters.

// At the end print the sum in the following format:

// · The total sum is: {sum}