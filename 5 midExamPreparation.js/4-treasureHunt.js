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

// The pirates need to carry a treasure chest safely back to the ship, looting along the way.
// Create a program that manages the state of the treasure chest along the way. On the first line, you will receive the initial loot of the treasure chest, which is a string of items separated by a "|".
// "{loot1}|{loot2}|{loot3} … {lootn}"
// The following lines represent commands until "Yohoho!" which ends the treasure hunt:
// •	"Loot {item1} {item2}…{itemn}":
// o	Pick up treasure loot along the way. Insert the items at the beginning of the chest.
// o	If an item is already contained, don't insert it.
// •	"Drop {index}":
// o	Remove the loot at the given position and add it at the end of the treasure chest.
// o	If the index is invalid, skip the command.
// •	"Steal {count}":
// o	Someone steals the last count loot items. If there are fewer items than the given count, remove as much as there are.
// o	Print the stolen items separated by ", ":
// "{item1}, {item2}, {item3} … {itemn}"
// In the end, output the average treasure gain, which is the sum of all treasure items length divided by the count of all items inside the chest formatted to the second decimal point:
// "Average treasure gain: {averageGain} pirate credits."
// If the chest is empty, print the following message:
// "Failed treasure hunt."
// Input
// •	On the 1st line, you are going to receive the initial treasure chest (loot separated by "|")
// •	On the following lines, until "Yohoho!", you will be receiving commands.
// Output
// •	Print the output in the format described above.
// Constraints
// •	The loot items will be strings containing any ASCII code.
// •	The indexes will be integers in the range [-200…200]
// •	The count will be an integer in the range [1….100]
