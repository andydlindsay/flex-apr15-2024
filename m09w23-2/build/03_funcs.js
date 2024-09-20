"use strict";
// name of the function, arguments, return value
const sayHello = (name, age) => {
    return `hello ${name}`;
};
sayHello('alice');
sayHello('alice', 100);
const returningPromise = (num) => {
    return new Promise((resolve, reject) => {
        resolve('hello world');
    });
};
returningPromise(42)
    .then((data) => { });
