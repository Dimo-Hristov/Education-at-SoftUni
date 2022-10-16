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

// Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on.

// Print the elements on one row, separated by a single spac