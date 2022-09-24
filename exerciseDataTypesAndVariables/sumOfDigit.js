function sum(number) {
    number = number.toString();
    let length = number.length - 1;
    let sum = 0;

    for (i = 0; i <= length; i++) {
        sum += Number(number[i])
    }
    console.log(sum);
}
sum(245678)