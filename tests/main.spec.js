const chai = require('chai');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const dirtyChai = require('dirty-chai');
const calc = require('../src/main');

chai.use(dirtyChai);

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exit `calc` lib', () => {
      expect(calc).to.exist();
    });

    it('should exist the method `sum`', () => {
      expect(calc.sum).to.exist();
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method .sub`', () => {
      expect(calc.sub).to.exist();
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(calc.mult).to.exist();
      expect(calc.mult).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(calc.div).to.exist();
      expect(calc.div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `calc.sum(2, 2)`', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 2 when `calc.sub(7, 5)`', () => {
      expect(calc.sub(7, 5)).to.be.equal(2);
    });
  });

  describe('Mult', () => {
    it('should return 6 when `calc.mult(2, 3)`', () => {
      expect(calc.mult(2, 3)).to.be.equal(6);
    });
  });

  describe('Div', () => {
    it('should return 5 when `calc.div(25, 5)`', () => {
      expect(calc.div(25, 5)).to.be.equal(5);
    });

    it('should return `no possible, asshole!` when divide by 0', () => {
      expect(calc.div(4, 0)).to.be.equal('no possible, asshole!');
    });
  });
});

