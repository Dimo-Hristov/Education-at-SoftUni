function maxNumber(array) {
    let correctNumbers = ''

    for (let i = 0; i < array.length; i++) {
        let isBigger = true
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                isBigger = false
                break;
            }
        }
        if (isBigger) {
            correctNumbers += (array[i] + ' ');
        }
    }
    console.log(correctNumbers);

}
maxNumber([14, 24, 3, 19, 15, 17])