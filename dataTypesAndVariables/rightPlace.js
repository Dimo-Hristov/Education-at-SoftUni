function replace(string, char, result) {
    let ifMatch = string.replace('_', char)
    let output = ifMatch == result ? 'Matched' : 'Not Matched';
    console.log(output);
}
replace('Str_ng', 'I', 'Strong')