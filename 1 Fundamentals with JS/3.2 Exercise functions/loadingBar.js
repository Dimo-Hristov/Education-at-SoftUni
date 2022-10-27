function loadingBar(number) {
    let firstSumbol = '';
    let secondSumbol = '';
    let firstSymbolRepeat = number / 10;
    let secondSumbolRepeat = 10 - firstSymbolRepeat;

    for (let i = 0; i < firstSymbolRepeat; i++) {
        firstSumbol += '%'
    }

    for (let i = 0; i < secondSumbolRepeat; i++) {
        firstSumbol += '.'
    }

    if (number >= 100) {
        console.log('100% Complete!');
    } else {
        console.log(`${number}% [${firstSumbol}${secondSumbol}]`);
        console.log('Still loading...');
    }

}
loadingBar(50)