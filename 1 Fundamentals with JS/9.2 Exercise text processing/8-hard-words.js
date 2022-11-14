function hardWords(input) {
    // take first the text and put it in array
    let textArr = input[0].split(' ');
    // take the words who are missing from text.
    let array = input[1];

    for (let wordToAdd of array) {
        // create one word from symbols who define empty place with same length as the word.
        let match = '_'.repeat(wordToAdd.length);

        for (let emptyPlace of textArr) {
            // find word who includes these symbols and have the same length. 
            if (emptyPlace.includes(match) && wordToAdd.length == emptyPlace.length) {
                // replace the index of missing word with the correct word.
                let indexToAdd = textArr.indexOf(emptyPlace);
                textArr[indexToAdd] = wordToAdd;
                break;
            }
            // for case then the word ends with comma or dot. Enter here
            if (emptyPlace.includes(match)
                && wordToAdd.length + 1 == emptyPlace.length
                && !emptyPlace.endsWith('_')) {
                let lastsymbol = emptyPlace[emptyPlace.length - 1];
                let indexToAdd = textArr.indexOf(emptyPlace);
                textArr[indexToAdd] = wordToAdd + lastsymbol
            }
        }
    }
    console.log(textArr.join(' '));
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])

// You will receive an array, which holds the string and another array.

// The string is a letter from a young boy who does not yet know some words and you have to help him. The letter has a few holes, these holes are the words unknown to the boy and you must fill them with strings from the array you receive at the second index.

// If the length of the hole is 4 you have to replace it with string with the same length and so on