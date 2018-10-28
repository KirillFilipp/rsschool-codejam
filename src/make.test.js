const assert = require('assert');
const make = require('./make');

describe('Make', () => {
  it('1', () => {
    const count = make(15)(34, 21, 666)(41)((a, b) => a + b);
    assert.deepEqual(count, 777);
  });
});
