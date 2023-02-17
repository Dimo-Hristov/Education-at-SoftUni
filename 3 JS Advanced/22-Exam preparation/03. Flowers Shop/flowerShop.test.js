let { expect } = require('chai');
let flowerShop = require('./flowerShop');

describe('Testing the flowerShop', () => {
    describe('Testing calcPriceOfFlowers funcionality', () => {
        it('Should throw error if the first param is not a string', () => {
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 52, 5)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(true, 52, 5)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers([], 52, 5)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(NaN, 52, 5)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(52, 52, 5)).to.throw(Error, 'Invalid input!');
        })

        it('Should throw error if the second param is not a string', () => {
            expect(() => flowerShop.calcPriceOfFlowers('flower', 52.3, 5)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', '14.5', 5)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', undefined, 5)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', NaN, 5)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', {}, 5)).to.throw(Error, 'Invalid input!');
        })

        it('Should throw error if the third param is not a string', () => {
            expect(() => flowerShop.calcPriceOfFlowers('flower', 52, 5.2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 52, '5.3')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 52, NaN)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 52, undefined)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 52, false)).to.throw(Error, 'Invalid input!');
        });

        it('should return the multiplies price and quantity rounded to second digit after decimal point', () => {
            expect(flowerShop.calcPriceOfFlowers('rose', 5, 10)).to.equal('You need $50.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', 10, 5)).to.equal('You need $50.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', 0, 5)).to.equal('You need $0.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', 5, 0)).to.equal('You need $0.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', 100, 1000)).to.equal('You need $100000.00 to buy rose!');
        })
    })

    describe('Testing checkFlowersAvailable functionality', () => {

        it('should check if the flower is avaivable in the array and return string', () => {
            expect(flowerShop.checkFlowersAvailable('rose', ['orchid', 'daisy', 'rose'])).to.be.equal('The rose are available!');
            expect(flowerShop.checkFlowersAvailable('daisy', ['orchid', 'daisy', 'rose'])).to.be.equal('The daisy are available!');
        })

        it('should return string with details if the flower is not in the arrat', () => {
            expect(flowerShop.checkFlowersAvailable('sunflower', ['orchid', 'daisy', 'rose'])).to.be.equal('The sunflower are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('rose', [])).to.be.equal('The rose are sold! You need to purchase more!');
        })
    })

    describe('Testing sellFlowers functionality', () => {
        it('should throw error if fist param in not an array', () => {
            expect(() => flowerShop.sellFlowers('52', 52)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(13.5, 52)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers([], 52)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(true, 52)).to.throw(Error, 'Invalid input!');

        });

        it('should throw error if second param in not an array', () => {
            expect(() => flowerShop.sellFlowers(['hi'], 52.3)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['hi'], '52')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['hi'], NaN)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['hi'], true)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['hi'], undefined)).to.throw(Error, 'Invalid input!');
        })

        it('should throw error the second param is below 0', () => {
            expect(() => flowerShop.sellFlowers(['hi', 5], -1)).to.throw(Error, 'Invalid input!');
        })

        it('should throw if the second param is more or equal to firstparam length', () => {
            expect(() => flowerShop.sellFlowers(['hi', 5], 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['hi', 5], 156)).to.throw(Error, 'Invalid input!');
        })

        it('should remove the index (second param) from array and return the new array joined by " / "', () => {
            expect(flowerShop.sellFlowers(['orchid', 'daisy', 'rose'], 1)).to.equal('orchid / rose');
        })


    })
})