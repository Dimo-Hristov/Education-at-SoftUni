let expect = require('chai').expect;
let mathEnforcer = require('./4-math-enforcer');

describe('Testing mathEnforcer object functionalities', () => {
    describe('Testing addFive functionality', () => {
        it('sould return undefined if the parameter is not a number', () => {
            expect(mathEnforcer.addFive('string')).to.be.undefined;
            expect(mathEnforcer.addFive(true)).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive()).to.be.undefined;
        });
        it('sould add 5 to the given number and return the result', () => {
            expect(mathEnforcer.addFive(55)).to.equal(60);
            expect(mathEnforcer.addFive(-6)).to.equal(-1);
            expect(mathEnforcer.addFive(165.63598756)).to.be.closeTo(170.63598756, 0.01)

        })
    })
    describe('Testing subtractTen functionality', () => {
        it('sould return undefined if the parameter is not a number', () => {
            expect(mathEnforcer.subtractTen('string')).to.be.undefined;
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        });
        it('sould subtract 10 to the given number and return the result', () => {
            expect(mathEnforcer.subtractTen(75)).to.equal(65);
            expect(mathEnforcer.subtractTen(-6)).to.equal(-16);
            expect(mathEnforcer.subtractTen(165.63598756)).to.be.closeTo(155.63598756, 0.01)

        })
    })
    describe('Testing sum functionality', () => {
        it('sould return undefined if the first parameter is not a number', () => {
            expect(mathEnforcer.sum('string', 5)).to.be.undefined;
            expect(mathEnforcer.sum(true, 5)).to.be.undefined;
            expect(mathEnforcer.sum([], 5),).to.be.undefined;
            expect(mathEnforcer.sum({}, 5)).to.be.undefined;
            expect(mathEnforcer.sum()).to.be.undefined;
        });
        it('sould return undefined if the second parameter is not a number', () => {
            expect(mathEnforcer.sum(5, 'string')).to.be.undefined;
            expect(mathEnforcer.sum(5, true)).to.be.undefined;
            expect(mathEnforcer.sum(5, []),).to.be.undefined;
            expect(mathEnforcer.sum(5, {})).to.be.undefined;
        });
        it('sould return the sum of first and second parameters', () => {
            expect(mathEnforcer.sum(75, 75)).to.equal(150);
            expect(mathEnforcer.sum(-60, -60)).to.equal(-120);
            expect(mathEnforcer.sum(-60, 50)).to.equal(-10);
            expect(mathEnforcer.sum(165.63598756, -100)).to.be.closeTo(65.63598756, 0.01)
            expect(mathEnforcer.sum(165.63598756, 100)).to.be.closeTo(265.63598756, 0.01)

        })
    })
});
