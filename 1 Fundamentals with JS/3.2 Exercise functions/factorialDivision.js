function factorialDivision(number, divider) {
    let resultNumber = 1;
    let resultDivider = 1;
    for (let i = 1; i <= number; i++) {
        resultNumber *= i
    }

    for (let j = 1; j <= divider; j++) {
        resultDivider *= j

    }

    let finalResult = resultNumber / resultDivider

    console.log(finalResult.toFixed(2));

}
factorialDivision(6, 2)