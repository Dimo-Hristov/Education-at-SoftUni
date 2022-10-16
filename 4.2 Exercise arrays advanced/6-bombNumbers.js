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

//     6. Bomb Numbers

// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power.

// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear.

// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and its power.

// The output is the sum of the remaining elements in the sequence.