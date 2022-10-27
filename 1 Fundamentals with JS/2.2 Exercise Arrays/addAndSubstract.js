function addAndSubstract(array) {
    let modifiedArray = [];
    let arrayLength = array.length
    let sumOfNumbers = 0;
    let sumOfNumbersFromModifiedArray = 0;

    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = Number(array[i]);
        if (currentNumber % 2 == 0) {
            sumOfNumbers += currentNumber // add the number
            currentNumber += i; // here we add the number of index, to the numer.
            sumOfNumbersFromModifiedArray += currentNumber // add the number + the number of index
            modifiedArray.push(currentNumber);
        } else {
            sumOfNumbers += currentNumber // add the number
            currentNumber -= i; // here we add the number of index, to the numer.
            sumOfNumbersFromModifiedArray += currentNumber // add the number + the number of index
            modifiedArray.push(currentNumber);

        }
    }
    console.log(modifiedArray);
    console.log(sumOfNumbers);
    console.log(sumOfNumbersFromModifiedArray);
}
addAndSubstract([5, 15, 23, 56, 35])