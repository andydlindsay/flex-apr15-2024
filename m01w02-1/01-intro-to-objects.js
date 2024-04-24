const firstName = 'alice';
const cohort = 'apr 15 2024';
const hasGraduated = false;

const studentOne = ['alice', 'apr 15 2024', false];

const arr = ['hello'];
// arr[0] = 'hello';
// arr[0] = 'goodbye';
// console.log(arr); // ['hello']

// objects are collections of key/value pairs
// key is always a string
// literal => because we are literally creating the value

// new Object(); // {} new Array()

// arrays => are collections of things
// objects => describe a single thing

const studentOneObj = {
  firstName: 'alice',
  cohort: 'apr 15 2024',
  hasGraduated: false,
  anotherObj: {
    moreKeys: {
      oneMoreValue: 'hello world'
    }
  }
};

// square bracket syntax
studentOneObj['anotherObj']['moreKeys']['oneMoreValue'];

// dot notation
studentOneObj.anotherObj.moreKeys.oneMoreValue;

const myObj = {
  firstName: 'elise',
  cohort: 'apr 15 2024'
};

// console.log(myObj['firstName']);
// console.log(myObj.firstName);

const targetKey = 'firstName';

// myObj.firstName
// 'hello world'
// 42

// you can't use dot syntax if the key is stored in a variable

console.log(myObj[targetKey]);
console.log(myObj.targetKey); // undefined

console.log()
console['log']()
