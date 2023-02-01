const expect = require('chai').expect;
const subSum = require('./1-sub-sum');

describe('Sub-sum Calculator', () => {
    it('should calculate sub-sub then index is lower than 0', () => {
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = -6;
        let endIndex = 2;
        let expectedResult = 60;

        let actualResult = subSum(numbers, startIndex, endIndex);

        expect(actualResult).to.equal(expectedResult)
    });

    it('should calculate sub-sub then index is higher than array', () => {
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = 4;
        let endIndex = 55;
        let expectedResult = 110;

        let actualResult = subSum(numbers, startIndex, endIndex);

        expect(actualResult).to.equal(expectedResult)
    });

    it('sould return NaN if the first parameter is not array', () => {
        expect(subSum(15, 3, 5)).to.be.NaN;
        expect(subSum({}, 3, 5)).to.be.NaN;
        expect(subSum(true, 3, 5)).to.be.NaN;
        expect(subSum(null, 3, 5)).to.be.NaN;
        expect(subSum(undefined, 3, 5)).to.be.NaN;
    });
})