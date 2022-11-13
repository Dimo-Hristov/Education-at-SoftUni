function cutAndReverse(text) {
    let center = text.length / 2;

    let firstHalf =
        text.slice(0, center)
            .split('')
            .reverse()
            .join('');
    let secondHalf =
        text.slice(center)
            .split('')
            .reverse()
            .join('');

    console.log(firstHalf);
    console.log(secondHalf);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');

// The input will be a single string.

// Write a function that cuts the given string into half and reverse the two halves.

// Print each half on a separate line.