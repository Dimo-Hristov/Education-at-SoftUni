function emojiDetector(input) {
    let text = input.shift()

    let digitsPattern = /\d/gm;
    let digitsInText = text.match(digitsPattern);

    let coolThreshold = 1;

    for (const digit of digitsInText) {
        coolThreshold *= Number(digit)
    }

    let emojisPattern = /([:|*]{2})(?<emoji>[A-Z]{1}[a-z]{2,})\1/gm;
    let matches = text.matchAll(emojisPattern);

    let coolEmojis = []
    let counter = 0

    for (const match of matches) {
        let emojiName = match.groups.emoji;
        let emojiNameWithSumbols = match[0]
        let emojiAsciiSum = 0
        counter++

        for (const letter of emojiName) {
            emojiAsciiSum += letter.charCodeAt(0);
        }

        if (emojiAsciiSum >= coolThreshold) {
            coolEmojis.push(emojiNameWithSumbols);
        }
    }

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${counter} emojis found in the text. The cool ones are: `);

    for (const emoji of coolEmojis) {
        console.log(emoji);
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])