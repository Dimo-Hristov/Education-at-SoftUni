function oddAndEvenSum(number) {
    let numberToString = number + ''
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numberToString.length; i++) {
        let currentNumber = Number(numberToString[i]);
        currentNumber % 2 === 0 ? evenSum += currentNumber : oddSum += currentNumber
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(3495892137259234)