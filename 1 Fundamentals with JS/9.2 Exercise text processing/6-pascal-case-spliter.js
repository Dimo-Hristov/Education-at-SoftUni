function pascalCaseSpliter(text) {
    let result = text[0];
    let lower = text.toLowerCase();

    for (let index = 1; index < text.length; index++) {
        if (text[index] !== lower[index]) {
            result += ', ';
        }
        result += text[index];
    }

    console.log(result);
}
pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan');

// You will receive a single string.

// This string is written in PascalCase format. Your task here is to split this string by every word in it.

// Print them joined by comma and space.