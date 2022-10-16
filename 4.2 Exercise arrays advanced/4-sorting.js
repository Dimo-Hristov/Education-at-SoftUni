function sorting(array) {
    let outputArray = []

    while (array.length > 0) {
        array.sort((a, b) => a - b);
        let biggestNumber = array.pop()
        let smallestNumber = array.shift()
        outputArray.push(biggestNumber)
        outputArray.push(smallestNumber)
    }
    console.log(outputArray.join(' '));



}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 100])