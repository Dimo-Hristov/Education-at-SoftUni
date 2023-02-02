let expect = require('chai').expect;
let lookupChar = require('./3-char-lookup');

describe('Testing lookupChar function', () => {
    describe('Corrent input checks', () => {
        it('should return undefined if first parameter is not string', () => {
            expect(lookupChar(56, 5)).to.be.undefined;
            expect(lookupChar([], 5)).to.be.undefined;
            expect(lookupChar(null, 5)).to.be.undefined;
            expect(lookupChar(true, 5)).to.be.undefined;
        });
        it('Should return undefined if the second parameter is not a number', () => {
            expect(lookupChar('hello', 'string')).to.be.undefined;
            expect(lookupChar('hello', true)).to.be.undefined;
            expect(lookupChar('hello', [])).to.be.undefined;
            expect(lookupChar('hello', NaN)).to.be.undefined;
        });
        it('Should return undefined if the second parameter is not integer number', () => {
            expect(lookupChar('hello', 5.2)).to.be.undefined;
        });
    });

    describe('Corrent Index check', () => {
        it('should return Incorrect index, if the index is below 0', () => {
            expect(lookupChar('hello', -1)).to.equal('Incorrect index');
            expect(lookupChar('hello', -398)).to.equal('Incorrect index');
        });
        it('should return Incorrect index, if the index higher than the string length - 1', () => {
            expect(lookupChar('hello', 5)).to.equal('Incorrect index');
            expect(lookupChar('hello', 589)).to.equal('Incorrect index');
        });
    })
    describe('Correct answer check', () => {
        it('should return the char of string, at given index', () => {
            expect(lookupChar('hello', 0)).to.equal('h');
            expect(lookupChar('hello', 4)).to.equal('o');
            expect(lookupChar('hello', 1)).to.equal('e');
        });
    })
})