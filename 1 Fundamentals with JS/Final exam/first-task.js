function stringGame(input) {
    let string = input.shift();
    let currentLine = input.shift();

    while (currentLine != 'Done') {
        currentLine = currentLine.split(' ');
        let command = currentLine.shift();

        switch (command) {
            case 'Change':
                let [char, replacement] = currentLine;

                while (string.includes(char)) {
                    string = string.replace(char, replacement)
                }
                console.log(string);
                break;

            case 'Includes':
                let includeSubstring = currentLine.shift();

                if (string.includes(includeSubstring)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;

            case 'End':
                let endWith = currentLine.shift();

                if (string.endsWith(endWith)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;

            case 'Uppercase':

                string = string.toUpperCase();
                console.log(string);
                break;

            case 'FindIndex':
                let charToFindTheIndex = currentLine.shift();
                let index = string.indexOf(charToFindTheIndex);
                console.log(index);
                break;

            case 'Cut':
                let startIndex = Number(currentLine.shift());
                let count = Number(currentLine.shift());

                let stringToRemove = string.slice(startIndex, startIndex + count);
                string = string.replace(stringToRemove, '');
                console.log(stringToRemove);
                break;

        }
        currentLine = input.shift();
    }


}
stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])

