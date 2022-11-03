function oddOccurences(input) {
    //first make every word with small letters
    let arrOfWords = input.split(' ')
        .map(element => {
            return element.toLowerCase()
        })

    let listOfWords = {};

    // make a list of words, set value to 0 and we will use it for counter.
    arrOfWords.forEach(word => listOfWords[word] = 0);

    // search how much times every word is repeated.
    for (const word of arrOfWords) {
        for (const key in listOfWords) {
            if (word == key) {
                listOfWords[key]++
            }
        }
    }

    let kvpArr = Object.entries(listOfWords);
    // sort them by value
    kvpArr.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
    // create array for print
    let output = [];
    // check is value is odd
    for (const [key, value] of kvpArr) {
        if (value % 2 != 0) {
            output.push(key)
        }
    }

    console.log(output.join(' '));

}
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')

// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).

// The input comes as a single string. The words will be separated by a single space.