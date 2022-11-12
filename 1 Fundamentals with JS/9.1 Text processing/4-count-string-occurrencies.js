function count(text, wordToFind) {
    let counter = 0;
    let sentence = text.split(' ');

    for (const word of sentence) {
        if (word == wordToFind) counter++;
    }
    console.log(counter);
}
count('This is a word and it also is a sentence',

    'is')