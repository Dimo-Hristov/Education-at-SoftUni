function listOfNames(arr) {
    arr
        .sort((a, b) => a.localeCompare(b))
        .forEach((element, index) => console.log(`${index + 1}.${element}`));

}
listOfNames(["John", "Bob", "Christina", "Ema"]);

// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.