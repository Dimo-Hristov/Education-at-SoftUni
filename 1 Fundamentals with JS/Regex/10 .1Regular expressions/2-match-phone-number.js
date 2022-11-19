function matchPhoneNumber(input) {
    let text = input.shift()

    const pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let match = text.match(pattern);

    console.log(match.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])