function sortArray(array) {
    array.sort((a, b) => a.length - b.length || a.localeCompare(b))

    console.log(array.join('\n'));
}
sortArray(['alpha', 'beta', 'aamma'])

// 5. Sort an Array by 2 Criteria

// Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.

// The input comes as an array of strings.

// The output is the ordered array of strings, each on a separate line