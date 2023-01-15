function diagonalSums(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i];
        secondDiagonal += matrix[i][matrix.length - i - 1];
    }

    console.log(`${firstDiagonal} ${secondDiagonal}`);

}
diagonalSums([[20, 40],
[10, 60]]);
console.log('-----------');
diagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);


//     A square matrix of numbers comes as an array of arrays, each array holding numbers. Write a function that finds the sum at the main and the secondary diagonals.

// The input comes as an array of arrays, containing number elements (2D matrix of numbers).

// The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.