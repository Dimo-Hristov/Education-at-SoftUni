class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.')
        }

        let bookToAdd = {
            bookName,
            bookAuthor,
            payed: false,

        }

        this.books.push(bookToAdd);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        const bookToPay = this.books.find(x => x.bookName == bookName);

        if (bookToPay == undefined) throw new Error(`${bookName} is not in the collection.`);

        if (bookToPay.payed == true) throw new Error(`${bookName} has already been paid.`);

        bookToPay.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        const indexOfBook = this.books.findIndex(x => x.bookName == bookName);

        if (indexOfBook == -1) throw new Error(`The book, you're looking for, is not found.`);

        if (this.books[indexOfBook].payed == false) throw new Error(`${bookName} need to be paid before removing from the collection.`)

        this.books.splice(indexOfBook, 1);
        return `${bookName} remove from the collection.`

    }

    getStatistics(bookAuthor) {
        if (bookAuthor) {
            let authorBooks = this.books.filter(x => x.bookAuthor == bookAuthor);

            if (authorBooks.length == 0) throw new Error(`${bookAuthor} is not in the collection.`);

            const output = [];
            authorBooks.forEach(x => {
                let isPayed = x.payed == true ? 'Has Paid' : 'Not Paid';
                output.push(`${x.bookName} == ${x.bookAuthor} - ${isPayed}.`);
            })
            return output.join('\n');
        }

        const output = []
        const emptySlots = this.capacity - this.books.length;
        output.push(`The book collection has ${emptySlots} empty spots left.`);

        this.books
            .sort((a, b) => a.bookName.localeCompare(b.bookName))
            .forEach(x => {
                let isPayed = x.payed == true ? 'Has Paid' : 'Not Paid';
                output.push(`${x.bookName} == ${x.bookAuthor} - ${isPayed}.`)
            })
        return output.join('\n')
    }

}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());