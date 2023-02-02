const expect = require('chai').expect
const isSymmetric = require('./5-symmetry-check')

describe('testing isSymmetric function', () => {
    it('should accept only array as parameter', () => {
        let input = [1, 2, 3, 4];
        expect(input).to.be.an.an('array')
    })

    it('should take an array as argument', () => {
        expect(isSymmetric('test with string')).to.be.false;
        expect(isSymmetric(5)).to.be.false;
        expect(isSymmetric(false)).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric('ok')).to.be.false;

    });

    it('should return true if the array is symmetric', () => {
        expect(isSymmetric([5, 2, 5])).to.be.true;
        expect(isSymmetric(['a', 'b', 'c', 'c', 'b', 'a'])).to.be.true;
    });

    it('sould return false if the array is non symmetric', () => {
        expect(isSymmetric([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.be.false;
        expect(isSymmetric(['a', 'b', 'c', 'c', 'b', 'a', 'c', 'd'])).to.be.false;
    })

    it('sould accept array with strings', () => {
        expect(isSymmetric(['1', '2', '3', '4'])).to.be.false;
        expect(isSymmetric(['5', '2', '5'])).to.be.true;
    })
})