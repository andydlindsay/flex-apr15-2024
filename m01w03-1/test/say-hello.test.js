const assert = require('assert');
const sayHello = require('../say-hello');

describe('tests for the sayHello function', () => {

  it('returns "hello there alice" when called with "alice"', () => {
    const actual = sayHello('alice');
    const expected = 'hello there alice';

    assert.strictEqual(actual, expected);
  });

  it('returns "invalid parameter" when no name is passed in', () => {
    const actual = sayHello();
    const expected = 'invalid parameter';

    assert.strictEqual(actual, expected);
  });

});
