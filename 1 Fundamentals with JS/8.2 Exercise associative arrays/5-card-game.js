function cardGame(input) {
    let personsAndDecksList = {};

    for (const line of input) {
        let arrayToOperate = line.split(': ')
        let name = arrayToOperate.shift();
        let deck = arrayToOperate.join('').split(', ')
        let deckAfterFilter = [];

        if (personsAndDecksList[name]) {

            deck.forEach(card => {
                if (!deckAfterFilter.includes(card) && !personsAndDecksList[name].includes(card)) {
                    deckAfterFilter.push(card);
                }
            });
            personsAndDecksList[name] = personsAndDecksList[name].concat(deckAfterFilter);

        } else {
            deck.forEach(card => {
                if (!deckAfterFilter.includes(card)) {
                    deckAfterFilter.push(card);
                }
            });
            personsAndDecksList[name] = deckAfterFilter
        }
    }
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