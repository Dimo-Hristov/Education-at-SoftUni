let expect = require('chai').expect;
let library = require('./library');

describe('Testing require class', () => {
    describe('Testing calcPriceOfBook property function', () => {
        it('Should throw an error "Ivalid input", if the NameOfBook is not a string', () => {
            expect(() => library.calcPriceOfBook(false, 1994)).to.throw(Error, /Invalid input/);
            expect(() => library.calcPriceOfBook(34, 1994)).to.throw(Error, /Invalid input/);
            expect(() => library.calcPriceOfBook(undefined, 1994)).to.throw(Error, /Invalid input/);
            expect(() => library.calcPriceOfBook({}, 1994)).to.throw(Error, /Invalid input/);
        });

        it('should throw error "Ivalud input", if the year is not integer number', () => {
            expect(() => library.calcPriceOfBook('hello', 15.3)).to.throw(Error, /Invalid input/);
            expect(() => library.calcPriceOfBook('hello', undefined)).to.throw(Error, /Invalid input/);
            expect(() => library.calcPriceOfBook('hello', [])).to.throw(Error, /Invalid input/);
            expect(() => library.calcPriceOfBook('hello', true)).to.throw(Error, /Invalid input/);
        })

        it('Should add discount if the book is from 1980 or before', () => {
            let nameOfBook = 'Don Quixote';
            expect(library.calcPriceOfBook(nameOfBook, 1980)).to.be.equal(`Price of ${nameOfBook} is 10.00`);
            expect(library.calcPriceOfBook(nameOfBook, 1359)).to.be.equal(`Price of ${nameOfBook} is 10.00`);
        });

        it('Should return the normal price if the book is from 1981 up until now', () => {
            let nameOfBook = 'Don Quixote';
            expect(library.calcPriceOfBook(nameOfBook, 1981)).to.be.equal(`Price of ${nameOfBook} is 20.00`)
            expect(library.calcPriceOfBook(nameOfBook, 2018)).to.be.equal(`Price of ${nameOfBook} is 20.00`)
        })

        describe('Testing findBook property funtion', () => {
            let booksArr = ['Harry Potter', 'Troy', 'Life Style', 'Torronto'];

            it('Should throw error "No books currently available", if the booksArr is empty', () => {
                expect(() => library.findBook([], 'Troy')).to.throw(Error, /No books currently available/);
            });

            it('should return "We found the book you want.", if the desired book is in the array', () => {
                expect(library.findBook(booksArr, 'Troy')).to.be.equal('We found the book you want.');
                expect(library.findBook(booksArr, 'Torronto')).to.be.equal('We found the book you want.');
                expect(library.findBook(booksArr, 'Harry Potter')).to.be.equal('We found the book you want.');
            });

            it('Should return "The book you are looking for is not here!", if the desired book is in the array', () => {
                expect(library.findBook(booksArr, 'The Midnight Library')).to.be.equal('The book you are looking for is not here!');
            });
        })

        describe('Testing the arrangeTheBooks property function', () => {

            it('Should throw error "Invalid input", if the given parameter is not integer or below 0', () => {
                expect(() => library.arrangeTheBooks(-1)).to.throw(Error, /Invalid input/);
                expect(() => library.arrangeTheBooks(-1658.2)).to.throw(Error, /Invalid input/);
                expect(() => library.arrangeTheBooks(15.3)).to.throw(Error, /Invalid input/);
                expect(() => library.arrangeTheBooks(true)).to.throw(Error, /Invalid input/);
                expect(() => library.arrangeTheBooks(undefined)).to.throw(Error, /Invalid input/);
                expect(() => library.arrangeTheBooks([15])).to.throw(Error, /Invalid input/);
            });

            // available space is 40 books.
            it('Should return "Great job, the books are arranged.", if the space is enought', () => {
                expect(library.arrangeTheBooks(20)).to.be.equal('Great job, the books are arranged.');
                expect(library.arrangeTheBooks(1)).to.be.equal('Great job, the books are arranged.');
                expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.');
            });
            // available space is 40 books.
            it('Should return "Insufficient space, more shelves need to be purchased.", if the space is not enought', () => {
                expect(library.arrangeTheBooks(41)).to.be.equal('Insufficient space, more shelves need to be purchased.');
                expect(library.arrangeTheBooks(185)).to.be.equal('Insufficient space, more shelves need to be purchased.')
            })

        })
    })


})