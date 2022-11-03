function wordOccurencies(input) {
    let list = {};

    for (const entry of input) { // take every single word
        if (list[entry]) { // if the word exist in the list,add 1 to the counter( use the value for counter);
            list[entry]++
            continue;
        }
        list[entry] = 1 // if doesnt exist add the word to the list with value 1(use value for counter);
    }

    // sort the the words by value, in descending order.
    let kvpArray = Object.entries(list);
    kvpArray.sort(([wordA, countA], [wordB, countB]) => countB - countA);

    // print the list 

    kvpArray.forEach(([word, repeatTimes]) =>
        console.log(`${word} -> ${repeatTimes} times`))

}
wordOccurencies(["Here", "is", "the", "first", "sentence",

    "Here", "is", "another", "sentence", "And",

    "finally", "the", "third", "sentence"])

    // Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending order. The input comes as an array of strings.