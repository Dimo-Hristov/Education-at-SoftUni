function negativeOrPositiveNumbers(array) {
    const result = [];

    for (const currentElement of array) {
        if (currentElement < 0) {
            result.unshift(currentElement)
        } else {
            result.push(currentElement)
        }
    }
    console.log(result.join('\n'));



}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])