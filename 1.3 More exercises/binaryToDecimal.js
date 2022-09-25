function BinaryToDecimal(binNumber) {
    let number = 0;

    for (let i = 0; i < binNumber.length; i++) {
        let position = binNumber.length - 1 - i;
        let digit = binNumber[position];
        number += Number(digit) * Math.pow(2, i);

    }

    console.log(number);
}
BinaryToDecimal(00001001)