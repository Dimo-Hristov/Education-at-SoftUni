function printWithDelimiter(arr, delimiter) {
    console.log(arr.join(delimiter));

}
printWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
printWithDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');

// The input comes as two parameters – an array of strings and a string. The second parameter is the delimiter.

// The output is the elements of the array, printed on the console, each element separated from the others by the given delimiter.