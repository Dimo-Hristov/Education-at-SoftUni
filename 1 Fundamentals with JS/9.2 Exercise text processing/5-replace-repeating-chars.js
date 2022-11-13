function replaceChars(text) {
    let result = '';

    for (let index = 1; index < text.length; index++) {
        let charA = text[index + 1];
        let charB = text[index]

        if (charA != charB) {
            result += charB
        }
    }
    console.log(result);
}
replaceChars('aaaaabbbbbcdddeeeedssaa');

// Write a function that receives a single string and replace any sequence of the same letters with a single corresponding letter.