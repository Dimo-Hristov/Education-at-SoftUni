function nXnMatrix(number) {

    let currentLane = ''

    for (let i = 1; i <= number * number; i++) {
        currentLane += number + ' '

        if (i % number == 0) {
            currentLane += '\n'
        }
    }
    console.log(currentLane);



}
nXnMatrix(7)