function problem3(input) {
    let cardDeck = input.shift().split(', ');
    let commandsCount = Number(input.shift());

    for (let i = 0; i < commandsCount; i++) {
        let currentRow = input.shift().split(', ');
        let command = currentRow[0];

        switch (command) {
            case 'Add':
                let cardName = currentRow[1];
                if (cardDeck.includes(cardName)) {
                    console.log('Card is already in the deck');
                } else {
                    cardDeck.push(cardName);
                    console.log('Card successfully added');
                }
                break;
            case 'Remove':
                let cardToRemove = currentRow[1];
                let indexOfCardToRemove = cardDeck.indexOf(cardToRemove)  // -1 if is not found
                if (indexOfCardToRemove > -1) {
                    cardDeck.splice(indexOfCardToRemove, 1);
                    console.log('Card successfully removed');
                } else {
                    console.log('Card not found');
                }
                break;
            case 'Remove At':
                let indexToRemoveAt = Number(currentRow[1]);
                if (cardDeck[indexToRemoveAt]) {
                    cardDeck.splice(indexToRemoveAt, 1)
                    console.log('Card successfully removed');
                } else {
                    console.log('Index out of range');
                }
                break;
            case 'Insert':
                let indexToInsert = Number(currentRow[1]);
                let cardToInsert = currentRow[2];
                let isCardInTheDeck = cardDeck.includes(cardToInsert)

                if (!cardDeck[indexToInsert]) {
                    console.log('Index out of range');
                }
                if (cardDeck[indexToInsert] && isCardInTheDeck) {
                    console.log('Card is already added');
                }
                if (cardDeck[indexToInsert] && !isCardInTheDeck) {
                    cardDeck.splice(indexToInsert, 0, cardToInsert)
                    console.log('Card successfully added');
                }
                break;
        }
    }
    console.log(cardDeck.join(', '));
}
problem3(["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"])




