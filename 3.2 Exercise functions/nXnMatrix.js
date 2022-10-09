function nXnMatrix(number) {

    let output = ''

    for (let i = 1; i <= number * number; i++) {
        output += number + ' '

        if (i % number == 0) {
            output += '\n'
        }
    }
    console.log(output);
}
nXnMatrix(7)