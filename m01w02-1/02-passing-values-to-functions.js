// const num = 10;

// // primitives are passed by value (function gets a copy)
// const addTwo = function(number) {
//   number = number + 2;
//   console.log('inside the function', number); // 12
// };

// addTwo(num); 

// console.log('bottom of file', num); // 10

const myObj = {
  username: 'alice',
};

// objects are passed by reference (original value is passed in)
const changeName = function(obj) {
  obj.username = 'bob';
  console.log('inside the function', obj); // 'bob'
};

changeName(myObj);

console.log('bottom of the file', myObj); // 'bob'
