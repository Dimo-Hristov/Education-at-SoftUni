function sumOfNumber(a, b) {
    let result = 0
    a = Number(a);
    b = Number(b)

    for (let i = a; i <= b; i++) {
        result += i
    }
    console.log(result);

}
sumOfNumber('1', '5');
sumOfNumber('-8', '20');

// Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.

// The input comes as two string elements that need to be parsed as numbers.

// The output should return the sum.