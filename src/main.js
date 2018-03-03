module.exports = {
  sum: (num1, num2) => num1 + num2,
  sub: (num1, num2) => num1 - num2,
  mult: (num1, num2) => num1 * num2,
  div: (num1, num2) => {
    if (num2 === 0) return 'no possible, asshole!';

    return num1 / num2;
  },
};
