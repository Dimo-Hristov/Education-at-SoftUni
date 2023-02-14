function equalNeighbors(matrix) {
    let equalPairs = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let cow = 0; cow < matrix[row].length; cow++) {
            const currentElement = matrix[row][cow];
            const rightElement = matrix[row][cow + 1];

            if (currentElement === rightElement) {
                equalPairs++;
            }

            if (row < matrix.length - 1) {
                const lowerElement = matrix[row + 1][cow];
                if (currentElement === lowerElement) {
                    equalPairs++
                }
            }
        }
    }
    return equalPairs
}
console.log(equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]))

console.log('----------');

console.log(equalNeighbors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]));

// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).

// The input comes as an array of arrays, containing string elements (2D matrix of strings).

// The output is the return value of your function. Save the number of equal pairs you find and return it.