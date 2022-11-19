function integer(number1, number2, number3) {
    let sum = number1 + number2 + number3

    sum % 1 == 0 ? sum += ' - Integer' : sum += ' - Float';

    console.log(sum);

}
integer(9, 100, 1.1)