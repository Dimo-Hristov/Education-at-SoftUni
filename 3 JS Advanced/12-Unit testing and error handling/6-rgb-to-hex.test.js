let expect = require('chai').expect;
let rgbToHexColor = require('./6-rgb-to-hex');

describe('testing rgbToHexColor function', () => {
    it('return undefined is parameters is not numbers', () => {
        expect(rgbToHexColor(5, 6, 'hello')).to.be.undefined;
        expect(rgbToHexColor(5, true, 6)).to.be.undefined;
        expect(rgbToHexColor(NaN, 5, 6)).to.be.undefined;
    })

    it('should return undefined if the parameters are not integer numbers', () => {
        expect(rgbToHexColor(1.35, 6, 5)).to.be.undefined;
        expect(rgbToHexColor(6, 6.2, 5)).to.be.undefined;
        expect(rgbToHexColor(8, 6, 5.6)).to.be.undefined;
    });

    it('should return undefined if parameters are below 0', () => {
        expect(rgbToHexColor(-6, 5, 3)).to.be.undefined;
        expect(rgbToHexColor(8, -5, 3)).to.be.undefined;
        expect(rgbToHexColor(6, 5, -3)).to.be.undefined;
    })

    it('should return the same color in hexadecimal format as a string', () => {
        expect(rgbToHexColor(5, 8, 9)).to.be.string
    })


})