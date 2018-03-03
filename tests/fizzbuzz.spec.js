import { use, expect } from 'chai';
import { describe, it } from 'mocha';

import dirtyChai from 'dirty-chai';
import { isDivisibleByThree, isDivisibleByFive, isDivisibleByAndFive } from '../src/fizzbuzz';

use(dirtyChai);

describe.only('FizzBuzz', () => {
  describe('Smoke tests', () => {
    it('should exist method `isDivisibleByThree`', () => {
      expect(isDivisibleByThree).to.exist();
      expect(isDivisibleByThree).to.be.a('function');
    });

    it('should exist method `isDivisibleByFive`', () => {
      expect(isDivisibleByFive).to.exist();
      expect(isDivisibleByFive).to.be.a('function');
    });

    it('should exist method `isDivisibleByAndFive`', () => {
      expect(isDivisibleByAndFive).to.exist();
      expect(isDivisibleByAndFive).to.be.a('function');
    });
  });
});
