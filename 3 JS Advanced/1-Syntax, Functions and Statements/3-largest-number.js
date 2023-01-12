function largestNumber(a, b, c) {
    let largestNum = c;

    if (a > b && a > c) {
        largestNum = a;
    } else if (b > a && b > c) {
        largestNum = b;
    }

    console.log(`The largest number is ${largestNum}.`);

}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);


// Write a function that takes three number arguments as input and finds the largest of them. Print the following text on the console: `The largest number is {number}.`.

// The input comes as three number arguments passed to your function.

// The output should be printed to the console.