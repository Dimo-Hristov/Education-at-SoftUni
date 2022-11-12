function censoredWord(text, censoredWord) {

    while (text.includes(censoredWord)) {
        text = text.replace(censoredWord, '*'.repeat(censoredWord.length))
    }
    console.log(text);

}
censoredWord('A small sentence with some words',

    'small')