function emojiTask(input) {
    let text = input.shift();

    let validNumber = digitsSumator(text);
    let emojis = emojiDetector(text);

    for (const emoji of emojis) {
        let emojiSum = 0;

        for (let i = 2; i < emoji.length - 2; i++) {
            emojiSum += emoji.charCodeAt(i);
        }

        if (emojiSum >= validNumber) console.log(emoji);
    }


    function digitsSumator(text) {
        const digitsPattern = /\d+/g;
        let digitsInText = text.match(digitsPattern).join('');
        // take the first digit in the sum because we need to multiply every one of them.
        let digitsSum = digitsInText[0];
        // start from the second digit, so the first multiplication is first * second num.

        for (let i = 1; i < digitsInText.length; i++) {
            let currentNum = Number(digitsInText[i]);
            digitsSum *= currentNum;
        }
        console.log(`Cool threshold: ${digitsSum}`);
        return digitsSum;
    }
    function emojiDetector(text) {
        let emojiPattern = /(?<sumbols>[:*]{2})(?<emoji>[A-Z][a-z]{2,})\1/gm;

        let emojiList = text.match(emojiPattern);
        let count = emojiList.length;
        console.log(`${count} emojis found in the text. The cool ones are:`);
        return emojiList
    }
}
emojiTask(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);