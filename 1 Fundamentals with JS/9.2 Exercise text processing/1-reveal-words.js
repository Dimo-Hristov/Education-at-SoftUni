function revealWords(words, text) {
    const wordsArray = words.split(', ');
    text = ` ${text} `;

    wordsArray.forEach(word => {
        const match = ` ${'*'.repeat(word.length)} `
        text = text.replace(match, ` ${word} `)
    });

    console.log(text.trim());


}
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')