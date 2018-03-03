import { use, expect } from 'chai';
import { describe, it } from 'mocha';

import dirtyChai from 'dirty-chai';
import Fizzbuzz from '../src/fizzbuzz';

use(dirtyChai);

describe.only('FizzBuzz', () => {
  describe('Smoke tests', () => {
    it('should exist method `Fizzbuzz()`', () => {
      expect(Fizzbuzz()).to.exist();
      expect(Fizzbuzz()).to.be.a('function');
    });
  });

  describe('isDivisibleByThree', () => {
    it('should return `Fizz` when multiple of 3', () => {
      expect(Fizzbuzz(9)).to.be.equal('Fizz');
    });
  });

  describe('isDivisibleByFive', () => {
    it('should return `Buzz` when multiple of 5', () => {
      expect(Fizzbuzz(25)).to.be.equal('Buzz');
    });
  });

  describe('isDivisibleByAndFive', () => {
    it('should return `FizzBuzz` when multiple of 3 and 5', () => {
      expect(Fizzbuzz(15)).to.be.equal('FizzBuzz');
    });
  });
});
