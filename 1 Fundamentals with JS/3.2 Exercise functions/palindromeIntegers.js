function palindromeIntegers(array) {
    let arrayLength = array.length

    for (let i = 0; i < arrayLength; i++) {
        let currentNumbers = array[i];
        let reversedNumbers = array[i] + ''
        reversedNumbers = Number(reversedNumbers.split('').reverse().join(''))
        currentNumbers == reversedNumbers ? console.log('true') : console.log('false');
    }

}
palindromeIntegers([123, 323, 421, 121])