function askiiSumator(input) {
    let firstCharAskii = input[0].charCodeAt();
    let secondCharAskii = input[1].charCodeAt();
    let text = input[2];

    let smallestAskiNum = 0;
    let biggestAskiNum = 0;
    let sum = 0;

    if (firstCharAskii > secondCharAskii) {
        biggestAskiNum = firstCharAskii;
        smallestAskiNum = secondCharAskii;
    } else {
        biggestAskiNum = secondCharAskii;
        smallestAskiNum = firstCharAskii;
    }

    for (const char of text) {
        let currentCharAskiiNum = char.charCodeAt()
        if (currentCharAskiiNum > smallestAskiNum && currentCharAskiiNum < biggestAskiNum) {
            sum += currentCharAskiiNum
        }
    }

    console.log(sum);

}
askiiSumator(['a',

    '1',

    'jfe392$#@j24ui9ne#@$']);

    // Write a function that prints a sum of all characters
    //  between two given characters (their ASCII code).
    //   On the first line, you will get a character. On the second line,
    //    you get another character. On the last line, you get a random string.
    //     Find all the characters between the two given and print their ASCII sum.