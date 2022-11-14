function serializeString(input) {
    let str = input.toString();
    let charList = {};
    let strLength = str.length;

    for (let index = 0; index < strLength; index++) {
        let char = str[index];

        if (!charList[char]) {
            charList[char] = [];
        }
        charList[char].push(index);
    }

    for (const key in charList) {
        console.log(`${key}:${charList[key].join('/')}`);
    }
}
serializeString(["avjavamsdmcalsdm"]);

// You have been tasked to serialize a string. The serialization is done specially, in which a character from that string is saved with the indexes at which it is found.

// The input will consist array, containing a single string, which may consist of ANY ASCII characters. Your task is to serialize the string in the following way:

// {char}:{index1}/{index2}/{index3}

// The char will be the character, and the indexes will be the indexes it is found at in the string.