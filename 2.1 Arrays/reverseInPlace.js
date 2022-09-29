function reverseInPlace(array) {
    let output = ''

    for (let i = 0; i < array.length / 2; i++) {
        let tempElement = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = tempElement

    }

    for (let i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            output += array[i] + ' '
        } else {
            output += array[i]
        }
    }

    console.log(output);

}
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])