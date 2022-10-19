function tresureHunt(input) {
    let treasure = input.shift().split('|');
    let index = 0;
    let currentLine = input[index++].split(' ');

    while (currentLine[0] != 'Yohoho!') {
        let command = currentLine.shift();
        switch (command) {
            case 'Loot':
                for (const itemToAdd of currentLine) {
                    if (!treasure.includes(itemToAdd)) {
                        treasure.unshift(itemToAdd);
                    }
                }
                break;
            case 'Drop':
                let indexToMove = Number(currentLine[0])
                if (treasure[indexToMove]) {
                    let itemToAddAtTheEnd = treasure[indexToMove];
                    treasure.splice(indexToMove, 1)
                    treasure.push(itemToAddAtTheEnd)
                }
                break;
            case 'Steal':
                let itemToStoleQty = Number(currentLine[0]);
                let stolenItems = [];
                let treasureBeforeStealing = treasure.slice(0,)
                let isempty = false
                for (let i = 0; i < treasureBeforeStealing.length; i++) {
                    if (i >= itemToStoleQty) {
                        if (i > 0) {
                            isempty = true
                            console.log(stolenItems.join(', '));
                        }
                        break;
                    }
                    let stolenItem = treasure.pop()
                    stolenItems.unshift(stolenItem)

                }
                if (!isempty) {
                    console.log(stolenItems.join(', '));
                }
                break;
        }


        currentLine = currentLine = input[index++].split(' ');
    }

    let LengthcalculatorOfAllItems = 0
    for (const currentItem of treasure) {
        LengthcalculatorOfAllItems += currentItem.length
    }

    let averegeGain = (LengthcalculatorOfAllItems / treasure.length).toFixed(2)

    if (treasure.length > 0) {
        console.log(`Average treasure gain: ${averegeGain} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }

}
tresureHunt((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
)