function charactersInRange(char1, char2) {
    let result = []
    let smallestChar = "";
    smallestChar =
        char1.charCodeAt() < char2.charCodeAt()
            ? (smallestChar = char1.charCodeAt())
            : (smallestChar = char2.charCodeAt());

    let biggestChar = "";
    biggestChar =
        char1.charCodeAt() > char2.charCodeAt()
            ? (biggestChar = char1.charCodeAt())
            : (biggestChar = char2.charCodeAt());

    for (i = smallestChar + 1; i < biggestChar; i++) {
        result.push(String.fromCharCode(i))
    }
    console.log(result.join(' '));
}
charactersInRange("#", ":");
