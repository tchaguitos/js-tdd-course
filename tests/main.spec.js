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
});

