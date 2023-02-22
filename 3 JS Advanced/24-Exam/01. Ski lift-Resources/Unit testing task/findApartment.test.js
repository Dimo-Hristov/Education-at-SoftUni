const { expect } = require('chai');
const findNewApartment = require('./findApartment');

describe('Testing findNewApartment function', () => {
    describe('Testing isGoodLocation functionality', () => {
        it('Should throw Error if first param is not string', () => {
            expect(() => findNewApartment.isGoodLocation({}, true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation(52, true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation(undefined, true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation(true, true)).to.throw(Error, 'Invalid input!');
        })

        it('Should throw Error if second param is not string', () => {
            expect(() => findNewApartment.isGoodLocation('test', 52)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation('test', 'fail')).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation('test', [])).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation('test', undefined)).to.throw(Error, 'Invalid input!');
        })

        it('Should return not suitable if location is not allowed', () => {
            expect(findNewApartment.isGoodLocation('Ruse', true)).to.equal('This location is not suitable for you.')
        });

        it('Should return "There is no public transport in area." if second param if false', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.')
        })

        it('Should return "You can go on home tour!" if above condition are ok', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!')
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!')
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!')
        });
    })

    describe('Testing	isLargeEnough functionality', () => {
        it('Should throw Error if first param is not array with elements', () => {
            expect(() => findNewApartment.isLargeEnough([], 52)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough(52, true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough(undefined, true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough('helo', true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough({}, true)).to.throw(Error, 'Invalid input!');
        })

        it('Should throw Error if second param is not number', () => {
            expect(() => findNewApartment.isLargeEnough([2, 3], '52')).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough([2, 3], undefined)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough([2, 3], [])).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough([2, 3], true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough([2, 3], null)).to.throw(Error, 'Invalid input!');
        })

        it('Should return arr with aparment we want', () => {
            expect(findNewApartment.isLargeEnough([50, 60, 70], 50)).to.equal('50, 60, 70');
            expect(findNewApartment.isLargeEnough([50, 60, 70], 62)).to.equal('70');
            expect(findNewApartment.isLargeEnough([50, 60, 70], 55)).to.equal('60, 70');
        })
    });

    describe('Testing 	isItAffordable functionality', () => {
        it('Should throw error is firstparam is not a numbers or is 0 or below', () => {
            expect(() => findNewApartment.isItAffordable('52', 52)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable([], 52)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(undefined, 52)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(true, 52)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(0, 52)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(-15, 52)).to.throw(Error, 'Invalid input!');
        })

        it('Should throw error is second param is not a numbers', () => {
            expect(() => findNewApartment.isItAffordable(52, '52')).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(52, undefined)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(52, true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(52, [])).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(52, 0)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(52, -15)).to.throw(Error, 'Invalid input!');
        })

        it('Should return "You don\'t have enough money for this house!"', () => {
            expect(findNewApartment.isItAffordable(600, 599)).to.be.equal('You don\'t have enough money for this house!')
            expect(findNewApartment.isItAffordable(600, 10)).to.be.equal('You don\'t have enough money for this house!')
        })

        it('Should return "You can afford this home!"', () => {
            expect(findNewApartment.isItAffordable(600, 600)).to.be.equal('You can afford this home!')
            expect(findNewApartment.isItAffordable(600, 1535.2)).to.be.equal('You can afford this home!')
            expect(findNewApartment.isItAffordable(600, 68522)).to.be.equal('You can afford this home!')
        })
    })
})