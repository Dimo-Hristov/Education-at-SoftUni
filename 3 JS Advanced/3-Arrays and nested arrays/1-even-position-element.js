function evenPosition(arr) {
    let output = '';
    const arrLength = arr.length

    for (let index = 0; index < arrLength; index++) {
        if (index % 2 == 0) {
            output += arr[index] + ' '
        }
    }
    console.log(output);
}
evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10']);

// Write a function that finds the elements at even positions in an array.

// The input comes as an array of string elements.

// The output is printed on the console. Collect all elements in a string, separated by space.