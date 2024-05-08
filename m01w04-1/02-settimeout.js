console.log('top of the file');

// async code cannot run until all sync code is done

setTimeout(function() {
  console.log('2. inside timeout 2');
}, 2000);

setTimeout(function() {
  console.log('1. inside the timeout 1');
}, 1000);

// console.log(whatever);

console.log('bottom of the file');
