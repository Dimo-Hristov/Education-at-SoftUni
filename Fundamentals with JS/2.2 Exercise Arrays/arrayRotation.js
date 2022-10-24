function arrayRotation(array, rotations) {
    // hard way
    //    for (let j = 0; j < rotations; j++) {
    //        let firstNum = array[0];
    //        for (i = 0; i < array.length; i++) {
    //            array[i] = array[i + 1]
    //        }
    //            array[array.length -1] = firstNum
    //   }
    // easy way
    for (let i = 0; i < rotations; i++) {
        arrayToRotate = array[0];
        array.shift()
        array.push(arrayToRotate)
    }
    console.log(array.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2)