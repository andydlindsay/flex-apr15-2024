console.log('top of the file');

// blocking
for (let i = 0; i < 10; i++) {
  const date = new Date();
  console.log(date);
}

console.log('bottom of the file');
