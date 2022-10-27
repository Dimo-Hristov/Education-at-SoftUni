function problem1(input) {
    let coffeList = input.shift().split(' ')
    let numberOfCommands = Number(input.shift())

    for (let i = 0; i < numberOfCommands; i++) {
        let currentRow = input.shift().split(' ')
        let command = currentRow[0];

        switch (command) {
            case 'Include':
                let coffeToInclude = currentRow[1];
                coffeList.push(coffeToInclude)
                break;
            case 'Remove':
                let firstOrLast = currentRow[1];
                let coffesToRemove = currentRow[2];
                if (coffeList.length >= coffesToRemove) {
                    if (firstOrLast == 'first') {
                        coffeList.splice(0, coffesToRemove);
                    }
                    if (firstOrLast == 'last') {
                        coffeList.splice(-coffesToRemove, coffesToRemove)
                    }
                }
                break;
            case 'Prefer':
                let index1 = Number(currentRow[1]);
                let index2 = Number(currentRow[2]);
                if (coffeList[index1] && coffeList[index2]) {
                    [coffeList[index1], coffeList[index2]] = [coffeList[index2], coffeList[index1]]
                }
                break;
            case 'Reverse':
                coffeList.reverse()
        }

    }

    console.log('Coffees:');
    console.log(coffeList.join(' '));
}
problem1(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"])


