function lastKNumberSequence(n, k) {
    let output = [1];

    for (let i = 1; i < n; i++) {
        let index = Math.max(output.length - k, 0)
        let currentCalculate = output.slice(index)
        let sum = 0;

        for (const currentElement of currentCalculate) {
            sum += currentElement
        }
        output.push(sum)

    }
    console.log(output.join(' '));


}
lastKNumberSequence(6, 3)