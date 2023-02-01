const expect = require('chai').expect;
const sum = require('./4-sum-of-number');

describe('Sum calculator', () => {
    it('sould return NaN if expected parameter is not array', () => {
        expect(sum('hello')).to.be.NaN;
    })

    it('should return the sum of all values inside the array', () => {
        let numbers = [10, 10, 10];
        let expectedResult = 30;
        let actualResult = sum(numbers);

        expect(actualResult).to.equal(expectedResult)
    })
})