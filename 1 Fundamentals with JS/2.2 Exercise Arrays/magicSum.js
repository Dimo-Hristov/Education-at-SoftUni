function maginSum(array, Number) {
    let arrayLength = array.length

    for (let i = 0; i < arrayLength; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            if (array[i] + array[j] == Number) {
                console.log(array[i] + ' ' + array[j]);
            }
        }
    }

}
maginSum([14, 20, 60, 13, 7, 19, 8], 27)