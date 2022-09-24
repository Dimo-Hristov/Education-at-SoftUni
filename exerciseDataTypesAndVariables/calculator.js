function calculator(number1, operator, number2) {
    let sum = 0;

    switch (operator) {
        case '+': sum = number1 + number2; break;
        case '-': sum = number1 - number2; break;
        case '*': sum = number1 * number2; break;
        case '/': sum = number1 / number2; break;
    }
    console.log(sum.toFixed(2));
}
calculator(5, '+', 10)