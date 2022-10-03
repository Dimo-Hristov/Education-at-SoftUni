function rotate(array) {
    let rorationTimes = Number(array[array.length - 1])
    array.length -= 1
    let counter = 1

    for (let i = 0; i < rorationTimes; i++) {
        let tempElement = array[array.length - 1];
        array.pop()
        array.unshift(tempElement)
        //console.log(counter);
        // console.log(array.join(' '));
        // counter++



    }
    console.log(array.join(' '));

}
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15'])