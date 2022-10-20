function computerStore(input) {
    let command = input.shift()
    let totalSum = 0;

    while (command != 'special') {
        if (command == 'regular') {
            break;
        }
        command = Number(command)
        if (command < 0) {
            console.log('Invalid price!');
        } else {
            totalSum += command
        }
        command = input.shift()
    }
    let taxes = totalSum * 0.2;
    let finalPriceWithTaxes = totalSum + taxes;

    if (command == 'special') {
        finalPriceWithTaxes *= 0.9
    }

    if (finalPriceWithTaxes == 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you\'ve just bought a new computer!
Price without taxes: ${totalSum.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${finalPriceWithTaxes.toFixed(2)}$
`);
    }
}
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
