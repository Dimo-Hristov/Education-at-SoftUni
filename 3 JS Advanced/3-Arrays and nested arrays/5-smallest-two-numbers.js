function smallestTwoNumbers(arr) {
    let smallestNum = arr[0];
    let secondSmallest = arr[0];
    arr.forEach(x => x < smallestNum ? smallestNum = x : smallestNum);
    arr.forEach(x => x < secondSmallest && x > smallestNum ? secondSmallest = x : secondSmallest);

    console.log(`${smallestNum} ${secondSmallest}`);



}
smallestTwoNumbers([30, 15, 50, 5]);
console.log('---------');
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

// Write a function that prints the two smallest elements from an array of numbers.

// The input comes as an array of number elements.

// The output is printed on the console on a single line, separated by space