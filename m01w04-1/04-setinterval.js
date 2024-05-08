let count = 0;

const intervalRef = setInterval(function() {
  count += 1;

  console.log('hello', count);

  if (count === 10) {
    clearInterval(intervalRef);
  }
}, 500);

// console.log(intervalRef);
