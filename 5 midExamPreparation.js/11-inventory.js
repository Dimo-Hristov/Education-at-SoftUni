function inventory(input) {
    let journal = input.shift().split(', ')
    let currentRow = input.shift().split(' - ')

    while (currentRow[0] != 'Craft!') {
        let command = currentRow[0];
        switch (command) {
            case 'Collect':
                let itemToAdd = currentRow[1];
                if (!journal.includes(itemToAdd)) {
                    journal.push(itemToAdd)
                }
                break;
            case 'Drop':
                let itemToRemove = currentRow[1];
                let indexToRemove = journal.indexOf(itemToRemove)
                if (indexToRemove != -1) {
                    journal.splice(indexToRemove, 1)
                }
                break;
            case 'Combine Items':
                let items = currentRow[1].split(':')
                let oldItem = items[0];
                let newItem = items[1]
                let indexOfOldItem = journal.indexOf(oldItem);
                if (indexOfOldItem != -1) {
                    journal.splice(indexOfOldItem + 1, 0, newItem);
                }
                break;
            case 'Renew':
                let item = currentRow[1];
                let indexOfItemToMove = journal.indexOf(item)
                if (indexOfItemToMove != -1) {
                    let itemToTake = journal.splice(indexOfItemToMove, 1).join()
                    journal.push(itemToTake)
                }
        }
        currentRow = input.shift().split(' - ')
    }

    console.log(journal.join(', '));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])

// As a young traveler, you gather items and craft new items.
// Input / Constraints
// You will receive a journal with some collecting items, separated with a comma and a space (", "). After that, until receiving "Craft!" you will be receiving different commands split by " - ":
// •	"Collect - {item}" - you should add the given item to your inventory. If the item already exists, you should skip this line.
// •	"Drop - {item}" - you should remove the item from your inventory if it exists.
// •	"Combine Items - {old_item}:{new_item}" - you should check if the old item exists. If so, add the new item after the old one. Otherwise, ignore the command.
// •	"Renew – {item}" – if the given item exists, you should change its position and put it last in your inventory.
// Output
// After receiving "Craft!" print the items in your inventory, separated by ", ".
