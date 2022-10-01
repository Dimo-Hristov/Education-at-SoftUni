function maxSequence(array) {
    let longestArray = [];


    for (let i = 0; i < array.length; i++) {
        let currentArray = [];
        if (array[i] == array[i + 1]) {
            currentArray.push(array[i])
            for (let j = i + 1; j < array.length; j++) {
                currentArray.push(array[j])
                if (array[j] != array[j + 1]) {
                    break;
                }
            }
        }
        if (currentArray.length > longestArray.length) {
            longestArray = currentArray
        }
    }
    console.log(longestArray.join(' '));
}
maxSequence([2, 1, 1, 1, 2, 3, 3, 2, 2, 2, 1])