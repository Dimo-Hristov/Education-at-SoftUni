function reverse(n, array) {
    let output = [];
    let print = ''

    for (let i = 0; i < n; i++) {
        output[i] = array[i]
    }

    for (let i = output.length - 1; i >= 0; i--) {
        if (i > 0) {
            print += output[i] + ' '
        } else {
            print += output[i]
        }
    }
    console.log(print);

}
reverse(3, [10, 20, 30, 40, 50])