import { use, expect } from 'chai';
import { describe, it } from 'mocha';

import dirtyChai from 'dirty-chai';
import { Fizzbuzz } from '../src/fizzbuzz';

use(dirtyChai);

describe('FizzBuzz', () => {
  describe('Smoke tests', () => {
    it('should exist method `Fizzbuzz()`', () => {
      expect(Fizzbuzz).to.exist();
      expect(Fizzbuzz).to.be.a('function');
    });
  });

  it('should return `Fizz` when multiple of 3', () => {
    expect(Fizzbuzz(9)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(Fizzbuzz(25)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(Fizzbuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return the number when non-multiple', () => {
    expect(Fizzbuzz(4)).to.be.equal(4);
  });

  it('should return 0 when 0', () => {
    expect(Fizzbuzz(0)).to.be.equal(0);
  });
});
