function result(num1, num2, num3) {
    let finalOutput = ''
    if (positiveOrNegative(num1, num2) == 'Positive' && num3 > 0) {
        finalOutput = 'Positive';
    } else if (positiveOrNegative(num1, num2) == 'Negative' && num3 < 0) {
        finalOutput = 'Positive';
    } else {
        finalOutput = 'Negative'
    }
    console.log(finalOutput);

    function positiveOrNegative(num1, num2) {

        if (num1 > 0 && num2 > 0) {
            return 'Positive'
        } else if (num1 < 0 && num2 < 0) {
            return 'Positive'
        } else {
            return 'Negative'
        }
    }
}
result(-5, 1, 1)
