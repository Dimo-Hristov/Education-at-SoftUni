function printDNA(number) {
    let sequence = 'ATCGTTAGGG'
    let sequenceLength = sequence.length
    let char1 = '';
    let char2 = '';
    let counter = 0;
    let rowCounter = 1
    let index = 0
    // let firstRow = `**${char1}${char2}**`;
    // let secondRow = `*${char1}--${char2}*`;
    // let thirdRow = `${char1}----${char2}`;
    // let lastRow = `*${char1}--${char2}*`;


    while (counter < number) {
        if (index >= sequenceLength) {
            index = 0
        }
        char1 = sequence[index++]
        char2 = sequence[index++]

        if (rowCounter == 1) {
            console.log(`**${char1}${char2}**`);
            rowCounter++
        } else if (rowCounter == 2) {
            console.log(`*${char1}--${char2}*`);
            rowCounter++
        } else if (rowCounter == 3) {
            console.log(`${char1}----${char2}`);
            rowCounter++
        } else {
            console.log(`*${char1}--${char2}*`);
            rowCounter = 1;
        }
        counter++
    }

}
printDNA(10)