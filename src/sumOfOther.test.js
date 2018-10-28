const assert = require('assert');
const sumOfOther = require('./sumOfOther');

describe('Sum of other', () => {
  it('1', () => {
    const count = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(count, [8, 7, 6, 9]);
  });

  it('2', () => {
    const count = sumOfOther([1, 2, 3]);
    assert.deepEqual(count, [5, 4, 3]);
  });
});
