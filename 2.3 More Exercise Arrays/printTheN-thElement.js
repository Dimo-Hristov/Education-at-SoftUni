function print(array) {
    let output = [];
    let magicNum = Number(array[array.length - 1])
    let arrayPic = magicNum
    array[array.length - 1] = []

    for (let i = 0; i <= array.length / 2; i++) {
        if (i == 0) {
            output[i] = array[i]
        } else {
            output[i] = array[arrayPic]
            arrayPic += arrayPic

        }
    }
    console.log(output.join(' '));

}
print(['5', '20', '31', '4', '20', '2'])