function firstAndLastSum(numbers) {
    let firstNum = Number(numbers[0]);
    let lastNum = Number(numbers.pop())
    let result = firstNum + lastNum;
    console.log(result);

}
firstAndLastSum(['20', '30', '40'])