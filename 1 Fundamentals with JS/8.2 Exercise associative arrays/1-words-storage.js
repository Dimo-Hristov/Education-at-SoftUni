function wordsStorage(input) {
    // take the words we will search for in array and remove them from input.
    let wordsToSearchFor = input.shift().split(' ');
    let listOfWords = {};

    // make a list of the words and set the value to 0;
    // use the value as counter later.
    wordsToSearchFor.forEach(word => listOfWords[word] = 0);

    for (const entry of input) { // take every word in input.
        for (const word in listOfWords) {
            if (word == entry) { // check every word from list if match with the taken word from input.
                listOfWords[word]++ // if match, increase the counter(value) by 1.
            }
        }
    }

    // make kvp array from the list
    let kvpArr = Object.entries(listOfWords)

    // sort the them by counter(value) in descending order
    kvpArr.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)

    // print them
    kvpArr.forEach(([word, repeatenTimes]) => console.log(`${word} - ${repeatenTimes}`));
}
wordsStorage([

    'is the',

    'first', 'sentence', 'Here', 'is',

    'another', 'the', 'And', 'finally', 'the',

    'the', 'sentence'])

//     1. Words Tracker

// Write a function that receives an array of words and finds occurrences of given words in that sentence.

// The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words in which you will check for a match.

// Print for each word how many times it occurs. The words should be sorted by count in descending.