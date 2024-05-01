const sayHello = (name) => {
  if (name === undefined) {
    return 'invalid parameter';
  }

  return `hello there ${name}`;
};

// console.log(arguments);

const myFaveNum = 42;
const another = 'hello';

module.exports = sayHello;

// module.exports.sayHello = sayHello;
// module.exports.myFaveNum = myFaveNum;

// module.exports = [sayHello, myFaveNum];
// module.exports = {
//   sayHello: sayHello,
//   myFaveNum: myFaveNum,
// };
