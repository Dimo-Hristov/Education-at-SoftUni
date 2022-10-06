function signCheck(num1, num2, num3) {
    //check if a number is negative
    let isNegative = (a) => a < 0 ? true : false;
    // return the sum of booleans ( true = 1, false = 0)
    let result = isNegative(num1) + isNegative(num2) + isNegative(num3);
    //if 1 or 3 of the arguments are Negative (true) return Negative
    let output = (result == 1 || result == 3) ? 'Negative' : 'Positive';
    console.log(output);
}
signCheck(5, 12, -15)