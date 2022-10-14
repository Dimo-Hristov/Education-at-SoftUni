function firstAndLastK(array) {
    let k = array.shift()

    let firstKNumber = array.slice(0, k)
    let lastKNumber = array.slice(array.length - k)

    console.log(firstKNumber.join(' '));
    console.log(lastKNumber.join(' '));
}
firstAndLastK([2, 7, 8, 9])