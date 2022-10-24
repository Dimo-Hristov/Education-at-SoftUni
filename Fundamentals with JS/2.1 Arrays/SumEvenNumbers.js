function sumOfEven(input) {
    let sumOfEvenNumber = 0;

    for (let i = 0; i <= input.length; i++) {
        let currentNumber = input[i]
        if (currentNumber % 2 == 0) {
            sumOfEvenNumber += Number(input[i])
        }
    }
    console.log(sumOfEvenNumber);

}
sumOfEven(['2', '4', '6', '8', '10'])