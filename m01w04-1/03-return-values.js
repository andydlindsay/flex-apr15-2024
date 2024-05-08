// async functions DO NOT have return values

const higherOrderFunc = function(callback) {
  const user = {
    username: 'alice',
  };

  console.log('1. before the timeout');

  // setTimeout
  setTimeout(function() {
    console.log('5. inside the timeout');
    user.username = 'bob';
    callback(user);
  }, 3000);

  console.log('2. after the timeout');
};

console.log('3. before the main call');

higherOrderFunc(function(updatedUser) {
  console.log(updatedUser); // 'bob'
  console.log('6. inside the callback');
});

console.log('4. after the main call');
// 312456
