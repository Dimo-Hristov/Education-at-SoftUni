function biggestNum(num1, num2, num3) {
    let biggestNum = 0;
    if (num1 >= num2) {
        if (num1 >= num3) {
            biggestNum = num1
        } else {
            biggestNum = num3
        }
    } else if (num2 >= num1) {
        if (num2 >= num3) {
            biggestNum = num2
        } else {
            biggestNum = num3
        }
    } else if (num3 >= num1) {
        if (num3 >= num2) {
            biggestNum = num3
        } else {
            biggestNum = num2
        }
    }

    console.log(biggestNum);
}
biggestNum(43, 43.2, 43.1)