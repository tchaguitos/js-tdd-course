import { use, expect } from 'chai';
import { describe, it } from 'mocha';

import dirtyChai from 'dirty-chai';
import { sum, sub, mult, div } from '../src/main';

use(dirtyChai);

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist();
      expect(sum).to.be.a('function');
    });

    it('should exist the method .sub`', () => {
      expect(sub).to.exist();
      expect(sub).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist();
      expect(mult).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist();
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 2 when `sub(7, 5)`', () => {
      expect(sub(7, 5)).to.be.equal(2);
    });
  });

  describe('Mult', () => {
    it('should return 6 when `mult(2, 3)`', () => {
      expect(mult(2, 3)).to.be.equal(6);
    });
  });

  describe('Div', () => {
    it('should return 5 when `calc.div(25, 5)`', () => {
      expect(div(25, 5)).to.be.equal(5);
    });

    it('should return `no possible, asshole!` when divide by 0', () => {
      expect(div(4, 0)).to.be.equal('no possible, asshole!');
    });
  });
});

