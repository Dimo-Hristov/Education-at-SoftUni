function distinct(array) {
    let output = array.filter((x, index) => {
        return array.indexOf(x) == index;
    });

    console.log(output.join(' '));
}
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2])

// 2. Distinct Array

// You will be given an array of integer numbers on the first line of the input.

// Remove all repeating elements from the array.

// Print the result elements separated by a single space