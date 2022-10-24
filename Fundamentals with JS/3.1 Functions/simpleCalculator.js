function simpleCalculator(num1, num2, parameter) {
    let add = (numberOne, numberTwo) => numberOne + numberTwo;
    let subtract = (numberOne, numberTwo) => numberOne - numberTwo;
    let divide = (numberOne, numberTwo) => numberOne / numberTwo;
    let multiply = (numberOne, numberTwo) => numberOne * numberTwo;
    let result = 0;

    switch (parameter) {
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2);
            break;
    }
    console.log(result);
}
simpleCalculator(40, 8, "divide");
