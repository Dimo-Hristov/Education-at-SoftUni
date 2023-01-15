function smallestTwoNumbers(arr) {
    arr.sort((a, b) => a - b);
    const smallestNum = arr.shift();
    const secondSmallest = arr.shift();

    console.log(`${smallestNum} ${secondSmallest}`);



}
smallestTwoNumbers([30, 15, 50, 5]);
console.log('---------');
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

// Write a function that prints the two smallest elements from an array of numbers.

// The input comes as an array of number elements.

// The output is printed on the console on a single line, separated by space