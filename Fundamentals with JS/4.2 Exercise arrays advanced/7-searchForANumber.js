function searchForANumber(array, operations) {
    let elementsToTake = operations[0];
    let elementsToDelete = operations[1];
    let numberToSearchFor = operations[2];

    let arrayToModify = array.slice(0, elementsToTake); // take the first x elements
    arrayToModify.splice(0, elementsToDelete); // delete the first x elements
    let searchedNumber = arrayToModify.filter(x => x == numberToSearchFor); // take only the number we search
    let searchedNumberCount = searchedNumber.length; // take the repeat count [3,3] = 2
    console.log(`Number ${numberToSearchFor} occurs ${searchedNumberCount} times.`);

}
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5])

// You will receive two arrays of integers. The second array is containing exactly three numbers.

// The first number represents the number of elements you have to take from the first array (starting from the first one).

// The second number represents the number of elements you have to delete from the numbers you took (starting from the first one).

// The third number is the number we search in our collection after the manipulations.

// As output print how many times that number occurs in our array in the following format:

// "Number {number} occurs {count} times."