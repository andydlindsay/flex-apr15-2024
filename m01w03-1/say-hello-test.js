const assert = require('assert');
const sayHello = require('./say-hello.js');

const actual = sayHello('alice');
const expected = 'hello there alice';

assert.strictEqual(actual, expected);
