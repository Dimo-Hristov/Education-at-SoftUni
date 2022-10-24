function numberModification(number) {
    let numberToString = number.toString();
    let counter = numberToString.length
    let averegeValue = averegeValueOfInputCalculator()

    function averegeValueOfInputCalculator() {
        let averegeValueOfInput = 0;
        for (let i = 0; i < counter; i++) {
            let currentDigit = Number(numberToString[i])
            averegeValueOfInput += currentDigit / counter

        }
        return averegeValueOfInput
    }

    while (averegeValue < 5) {
        numberToString = numberToString.concat(9)
        counter++
        averegeValue = averegeValueOfInputCalculator()
    }

    console.log(numberToString);
}
numberModification(5835)