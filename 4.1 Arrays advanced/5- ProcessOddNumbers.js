function processTheOddNumbers(arr) {
    let result = arr
        .filter((x, i) => i % 2 == 1)
        .map(x => 2 * x)
        .reverse()


    console.log(result.join(' '));
}
processTheOddNumbers(['10', '15', '20', '25'])