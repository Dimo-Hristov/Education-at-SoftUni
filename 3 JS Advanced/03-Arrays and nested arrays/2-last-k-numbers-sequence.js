function lastK(n, k) {
    const result = [1];

    for (let i = 0; i < n - 1; i++) {
        let currentSum = 0;
        for (let j = k - 1; j >= 0; j--) {
            if (result[i - j]) {
                currentSum += result[i - j];
            }
        }
        result.push(currentSum);
    }
    return result;
}
lastK(6, 3);

// You are given two integers n and k. Write a JS function that generates and return the following sequence:

// · The first element is 1

// · Every following element equals the sum of the previous k elements

// · The length of the sequence is n elements

// The input comes as two number arguments. The first element represents the number n, and the second – the number k.

// The output is the return value of your function and should be an array of numbers.