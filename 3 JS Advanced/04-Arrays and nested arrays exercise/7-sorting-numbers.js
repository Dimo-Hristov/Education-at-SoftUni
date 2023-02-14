function sortingnumbers(arr) {
    const output = [];
    arr.sort((a, b) => a - b)
    while (arr.length != 0) {
        output.push(arr.shift());
        output.push(arr.pop())
    }
    return output
}

console.log(sortingnumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
//                          [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.

// Return the resulting array