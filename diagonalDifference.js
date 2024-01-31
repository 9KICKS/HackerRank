function diagonalDifference(matrix) {
    const n = matrix.length;

    const primarySum = matrix.reduce((sum, row, i) => sum + row[i], 0);
    const secondarySum = matrix.reduce((sum, row, i) => sum + row[n - 1 - i], 0);

    return Math.abs(primarySum - secondarySum);
}

const inputMatrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

const result = diagonalDifference(inputMatrix);
console.log(result);
