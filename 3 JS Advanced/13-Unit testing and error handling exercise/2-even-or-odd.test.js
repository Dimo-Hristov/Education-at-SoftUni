let expect = require('chai').expect;
let isOddOrEven = require('./2-even-or-odd');

describe('Testing isOddOrEven function', () => {
    it('should return undefined if the parameter is undefined', () => {
        expect(isOddOrEven(true)).to.be.undefined;
    });
    it('should return undefined if the parameter is boolean', () => {
        expect(isOddOrEven(true)).to.be.undefined;
    });
    it('should return undefined if the parameter is number', () => {
        expect(isOddOrEven(56)).to.be.undefined;
    });
    it('should return even if the string length is even', () => {
        expect(isOddOrEven('hi')).to.equal('even');
        expect(isOddOrEven('hihi')).to.equal('even');
    });
    it('should return odd if the string length is odd', () => {
        expect(isOddOrEven('ops')).to.equal('odd');
        expect(isOddOrEven('hello')).to.equal('odd');
    });

})

expect(isOddOrEven(NaN)).to.be.undefined;
expect(isOddOrEven(56)).to.be.undefined;
expect(isOddOrEven({})).to.be.undefined;