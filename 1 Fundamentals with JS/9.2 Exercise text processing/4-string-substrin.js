function strSubstr(word, text) {
    // make array to check every word.
    let textArr = text.split(' ');
    // the word should be case insensitive, but keep the original to print.
    let checkA = word.toLowerCase()
    let isFound = false
    // if word is found stop the program and make isFound: true.
    for (const element of textArr) {
        let checkB = element.toLowerCase()
        if (checkA == checkB) {
            isFound = true
            break;
        }
    }

    if (isFound) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
strSubstr('javascript', 'JavaScript is the best programming language');

// The input will be given as two separated strings (a word as a first parameter and a text as a second).

// Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find a match, print the word and stop the program.

// If you don't find the word print: "{word} not found!"