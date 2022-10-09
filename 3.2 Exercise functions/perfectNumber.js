function PerfectNumber(number) {
    let isPerfect = false
    let sum = 0;

    if (number >= 0) {
        for (let i = 1; i <= number / 2; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }
    }
    if (sum == number) {
        isPerfect = true;
    }

    if (isPerfect) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }


}
PerfectNumber(1236498)