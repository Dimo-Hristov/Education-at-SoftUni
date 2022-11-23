function printAndSum(startNum, endNum) {
    let sum = 0;
    let digits = [];

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        digits.push(i);
    }

    console.log(digits.join(' '));
    console.log('Sum: ' + sum);
}
printAndSum(5, 10);

// Write a function that displays numbers from given start to given end and their sum. The input comes as two number parameters. Print the result like the examples belo