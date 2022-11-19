function primeNumber(number) {
    if (number % number == 0 && number % 1 == 0 && number % 2 != 0 && number % 3 != 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}
primeNumber(81)