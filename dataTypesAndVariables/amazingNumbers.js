function numbers(number) {
    number = number.toString();
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        let currentNum = Number(number[i]);
        sum += currentNum;

    }

    if (sum.toString().includes('9')) {
        console.log(`${number} Amazing? True`)
    } else {
        console.log(`${number} Amazing? False`)
    }


}
numbers(999)