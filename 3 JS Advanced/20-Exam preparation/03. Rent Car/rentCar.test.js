let rentCar = require('./rentCar');
let { expect } = require('chai');

describe('Testing rentCar class', () => {
    describe('Testing searchCar functionality', () => {
        it('Should throw error is the first param is invalid', () => {
            expect(() => rentCar.searchCar({}, 'Toyota')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar('test', 'Toyota')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(undefined, 'Toyota')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(true, 'Toyota')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(5, 'Toyota')).to.throw(Error, 'Invalid input!');
        })


        it('Should throw error if the second param is invalid', () => {
            expect(() => rentCar.searchCar([2, 5], 5)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar([2, 5], [])).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar([2, 5], true)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar([2, 5], undefined)).to.throw(Error, 'Invalid input!');
        })

        it('Should reach for the model we want and return string with details', () => {
            expect(rentCar.searchCar(['BMW', 'AUDI', 'TOYOTA'], 'TOYOTA')).to.equal('There is 1 car of model TOYOTA in the catalog!')

            expect(rentCar.searchCar(['TOYOTA', 'BMW', 'AUDI', 'TOYOTA', 'TOYOTA'], 'TOYOTA')).to.equal('There is 3 car of model TOYOTA in the catalog!')

            expect(rentCar.searchCar(['BMW', 'AUDI', 'TOYOTA', 'BMW'], 'BMW')).to.equal('There is 2 car of model BMW in the catalog!')
        });

        it('Should throw error if there are no matching elements', () => {
            expect(() => rentCar.searchCar(['BMW', 'AUDI', 'TOYOTA', 'BMW'], 'bmw')).to.throw(Error, 'There are no such models in the catalog!');
            expect(() => rentCar.searchCar(['BMW', 'AUDI', 'TOYOTA', 'BMW'], 'HONDA')).to.throw(Error, 'There are no such models in the catalog!');
        })
    });

    describe('Testing calculatePriceOfCar functionality', () => {
        it('Should throw error if the first param is ivalid', () => {
            expect(() => rentCar.calculatePriceOfCar(5, 15)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar([], 15)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(true, 15)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(undefined, 15)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(NaN, 15)).to.throw(Error, 'Invalid input!');
        });

        it('Should throw error if the second param is ivalid', () => {
            expect(() => rentCar.calculatePriceOfCar('test', 15.3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('test', NaN)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('test', undefined)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('test', '15')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('test', true)).to.throw(Error, 'Invalid input!');
        });

        it('Should return error if the model is not in the catalogue', () => {
            expect(() => rentCar.calculatePriceOfCar('bmw', 5)).to.throw(Error, 'No such model in the catalog');
            expect(() => rentCar.calculatePriceOfCar('FORD', 5)).to.throw(Error, 'No such model in the catalog');
        });

        it('Should calculate the total sum for rent and return string with details', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 5)).to.equal('You choose BMW and it will cost $225!');
            expect(rentCar.calculatePriceOfCar('Volkswagen', 1)).to.equal('You choose Volkswagen and it will cost $20!');
            expect(rentCar.calculatePriceOfCar('Audi', 0)).to.equal('You choose Audi and it will cost $0!');
        });
    });

    describe('Testing checkBudget functionality', () => {
        it('Should throw error if the first param is invalid', () => {
            expect(() => rentCar.checkBudget(5.25, 15, 54)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(NaN, 15, 54)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(true, 15, 54)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget('5', 15, 54)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget({}, 15, 54)).to.throw(Error, 'Invalid input!');
        })

        it('Should throw error if the second param is invalid', () => {
            expect(() => rentCar.checkBudget(5, 15.5, 54)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(5, NaN, 54)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(5, undefined, 54)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(5, '15', 54)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(5, [], 54)).to.throw(Error, 'Invalid input!');
        })

        it('Should throw error if the first param is invalid', () => {
            expect(() => rentCar.checkBudget(5, 15, '54')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(5, 15, undefined)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(5, 15, false)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(5, 15, true)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(5, 15, 5.89)).to.throw(Error, 'Invalid input!');
        });

        it('Should return "You rent a car!" if the budget is enought', () => {
            expect(rentCar.checkBudget(10, 10, 100)).to.be.equal('You rent a car!');
            expect(rentCar.checkBudget(10, 5, 50)).to.be.equal('You rent a car!');
            expect(rentCar.checkBudget(5, 10, 50)).to.be.equal('You rent a car!');
            expect(rentCar.checkBudget(70, 80, 10000)).to.be.equal('You rent a car!');
        });

        it('Should return "You need a bigger budget!" if the budget is not enought', () => {
            expect(rentCar.checkBudget(70, 80, 500)).to.be.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(10, 5, 49)).to.be.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(10, 5, 0)).to.be.equal('You need a bigger budget!');
        })
    })
})