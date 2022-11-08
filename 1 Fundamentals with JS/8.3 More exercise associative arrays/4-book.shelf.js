function bookShelf(input) {
    let library = {};

    for (const line of input) {
        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');

            if (!library.hasOwnProperty(id)) {
                library[id] = { [genre]: [] };
            }
        } else {
            let [bookInfo, genre] = line.split(', ');

            for (const key in library) {
                if (library[key].hasOwnProperty(genre)) {
                    library[key][genre].push(bookInfo);
                    break;
                }
            }
        }
    }

    Object.keys(library).sort((a, b) => Object.entries(library[b])[0][1].length - Object.entries(library[a])[0][1].length)
        .forEach(id => {
            console.log(`${id} ${Object.keys(library[id])}: ${Object.values(library[id])[0].length}`);
            Object.values(library[id]).forEach(values => {
                values.sort((a, b) => a.localeCompare(b)).forEach(v => {
                    console.log(`--> ${v}`);
                });
            });
        });
}
bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])

//     Write a function that stores information about shelves and the books on the shelves. Each shelf has an Id and a genre of books that can be on it. Each book has a title, an author, and a genre. The input comes as an array of strings. They will be in the format: "{shelf id} -> {shelf genre}" – create a shelf if the id is not taken. "{book title}: {book author}, {book genre}" – if a shelf with that genre exists, add the

// book to the shelf. After finishing reading input, sort the shelves by a count of books in it in descending. For each shelf sort the books by title in ascending. Then print them in the following format. "{shelfOne id} {shelf genre}: {books count} --> {bookOne title}: {bookOne author} --> {bookTwo title}: {bookTwo author} … {shelfTwo id} {shelf genre}: {books count} …"