function cardFactory(cardFace, cardSuit) {
    const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }

    if (typeof cardFace != 'string' || typeof cardSuit != 'string') {
        throw new Error('The parameters must be string !!!')
    }

    if (!cardFaces.includes(cardFace)) {
        throw new Error('Ivalid card face')
    }

    if (!cardSuits[cardSuit]) {
        throw new Error('Ivalid card suit')
    }

    if (cardSuit !== cardSuit.toUpperCase()) {
        throw new Error('Expected only uppercase')
    }


    let card = {
        cardFace,
        cardSuit: cardSuits[cardSuit],
        toString() {
            console.log(this.cardFace + this.cardSuit);
        }
    }
    return card
}

let card = cardFactory('5', 'S');
card.toString();

// Create a JS factory function that returns a Card object holding the card’s face and suit. Throw an error if the card is initialized with an invalid face.

// · Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

// · Valid card suits are: S (♠), H (♥), D (♦), C (♣)

// Both face and suit are expected as an uppercase string. The object also needs to have a toString() method that prints the card’s face and suit as a string. Use the following UTF code literals to represent the suits:

// · \u2660 – Spades (♠)

// · \u2665 – Hearts (♥)

// · \u2666 – Diamonds (♦)

// · \u2663 – Clubs (♣)

// Input / Output

// The factory function takes two string parameters. The toString() method of the returned object must return a string.

