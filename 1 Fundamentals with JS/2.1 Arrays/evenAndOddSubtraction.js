function substraction(array) {
    let sumOfEvenNumbers = 0;
    let sumOfOddNumbers = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNumber = Number(array[i])
        if (currentNumber % 2 == 0) {
            sumOfEvenNumbers += currentNumber
        } else {
            sumOfOddNumbers += currentNumber
        }
    }

    let difference = sumOfEvenNumbers - sumOfOddNumbers
    console.log(difference);

}
substraction([1, 2, 3, 4, 5, 6])