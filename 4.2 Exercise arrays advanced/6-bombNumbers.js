function bombNumbers(sequence, bombNumbers) {
    let bombNumber = bombNumbers[0];
    let nearDamage = bombNumbers[1];


    while (sequence.includes(bombNumber)) {
        let removeFrom = Math.max(0, sequence.indexOf(bombNumber) - nearDamage);
        let removeTo = nearDamage * 2 + 1
        sequence.splice(removeFrom, removeTo);
    }

    let sum = 0;
    for (const currentNumber of sequence) {
        sum += currentNumber;
    }

    console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])