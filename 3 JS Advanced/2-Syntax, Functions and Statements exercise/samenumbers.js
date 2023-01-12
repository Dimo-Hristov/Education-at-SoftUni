function sameNumbers(number) {
    const numAsString = number.toString();
    const firstNum = Number(numAsString[0]);
    let sumOfDigits = 0
    let isSame = true;

    for (let i = 0; i < numAsString.length; i++) {
        const currentNum = Number(numAsString[i]);
        sumOfDigits += currentNum

        if (currentNum != firstNum) {
            isSame = false;
        }

    }

    console.log(isSame);
    console.log(sumOfDigits);
}
sameNumbers(2222222);
sameNumbers(1234);

// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.

// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.

// The input comes as an integer number.

// The output should be printed on the console.