function equalSums(array) {
    let output = 'no';

    for (let i = 0; i < array.length; i++) {
        let rightSum = 0;
        let leftSum = 0;
        for (let j = 0; j < i; j++) {
            rightSum += array[j];

        }
        for (let k = i + 1; k < array.length; k++) {
            leftSum += array[k]
        }
        if (leftSum == rightSum) {
            output = i
        } else if (rightSum == 0 && leftSum == 0) {
            output = 0
        }
    }
    console.log(output);
}
equalSums([10,
    5,
    5,
    99,
    3,
    4,
    2,
    5,
    1,
    1,
    4])