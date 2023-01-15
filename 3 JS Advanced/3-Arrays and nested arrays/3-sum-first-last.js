function sumOfFistAndLastNum(arr) {
    const firstindex = 0;
    const lastIndex = arr.length - 1
    const sum = Number(arr[firstindex]) + Number(arr[lastIndex]);
    return sum;

}
console.log(sumOfFistAndLastNum(['20', '30', '40']));
console.log(sumOfFistAndLastNum(['5', '10']));

// Write a function that calculates and returns the sum of the first and the last elements in an array.

// The input comes as an array of string elements holding numbers.

// The output is the return value of your function and should be a number.