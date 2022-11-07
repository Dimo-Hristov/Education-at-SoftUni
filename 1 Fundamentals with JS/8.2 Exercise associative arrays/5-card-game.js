function cardGame(input) {
    let personsAndDecksList = {};
    // make list with persons and the decks they have.
    for (const line of input) {
        let arrayToOperate = line.split(': ')
        let name = arrayToOperate.shift();
        let deck = arrayToOperate.join('').split(', ')
        let deckAfterFilter = [];
        //check if person exist. If exist, check for repeatable cards
        //in current deck + in his deck , if card is repeated discard it
        // after this add them to his deck.
        if (personsAndDecksList[name]) {
            deck.forEach(card => {
                if (!deckAfterFilter.includes(card) && !personsAndDecksList[name].includes(card)) {
                    deckAfterFilter.push(card);
                }
            });
            personsAndDecksList[name] = personsAndDecksList[name].concat(deckAfterFilter);

        } else {
            // if person doesent exist, add him to the list with his deck(check for repeatable cards)
            deck.forEach(card => {
                if (!deckAfterFilter.includes(card)) {
                    deckAfterFilter.push(card);
                }
            });
            personsAndDecksList[name] = deckAfterFilter
        }
    }
    // print every person with the calculated points from his deck.
    pointsPrinter(personsAndDecksList);


    function pointsPrinter(obj) {
        for (const player in obj) {
            let playerCards = obj[player];
            let sum = 0;

            for (const card of playerCards) {
                let firstNum = 0;
                let secondNum = 0;

                if (card.length == 3) {
                    firstNum = card[0] + card[1];
                    secondNum = card[2];
                } else {
                    firstNum = card[0];
                    secondNum = card[1];
                }

                if (isNaN(firstNum)) {
                    switch (firstNum) {
                        case 'J': firstNum = 11
                            break;
                        case 'Q': firstNum = 12
                            break;
                        case 'K': firstNum = 13
                            break;
                        case 'A': firstNum = 14
                            break;

                    }
                } else {
                    firstNum = Number(firstNum);
                }

                switch (secondNum) { //(S -> 4, H-> 3, D -> 2, C -> 1
                    case 'S': secondNum = 4
                        break;
                    case 'H': secondNum = 3
                        break;
                    case 'D': secondNum = 2
                        break;
                    case 'C': secondNum = 1
                        break;
                }
                sum += firstNum * secondNum
            }
            console.log(`${player}: ${sum}`);
        }

    }

}
cardGame([

    'John: 2C, 4H, 9H, AS, QS',

    'Slav: 3H, 10S, JC, KD, 5S, 10S',

    'Alex: 6H, 7S, KC, KD, 5S, 10C',

    'Thomas: QH, QC, JS, JD, JC',

    'Slav: 6H, 7S, KC, KD, 5S, 10C',

    'Thomas: QH, QC, JS, JD, JC',

    'Alex: 6H, 7S, KC, KD, 5S, 10C',

    'Thomas: QH, QC, JS, JD, JC',

    'John: JD, JD, JD, JD'

])

// You are given a sequence of people and for every person what cards he draws from the deck. The input will be an array of strings. Each string will be in the format:

// {personName}: {PT, PT, PT,… PT}

// Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.

// A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).

// Finally print out the total value each player has in his hand in the format:

// {personName}: {value}