function gcd(num1, num2) {
    let smallestNum = 0;
    let biggestDivider = 0;

    if (num1 > num2) {
        smallestNum = num2;
    } else {
        smallestNum = num1;
    }

    for (let i = smallestNum; i > 0; i--) {

        if (num1 % i == 0 && num2 % i == 0) {
            biggestDivider = i;
            break;
        }
    }
    console.log(biggestDivider);
}
gcd(15, 5);
gcd(2154, 458);

// Write a function that takes two positive numbers as input and compute the greatest common divisor.

// The input comes as two positive integer numbers.

// The output should be printed on the console.