function serializeString(input) {
    let str = input.toString()
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
serializeString(["avjavamsdmcalsdm"])