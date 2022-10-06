function repeatString(string, repeatTimes) {
    let result = '';

    for (let i = 0; i < repeatTimes; i++) {
        result += string
    }

    return result
}
repeatString("abc", 3)