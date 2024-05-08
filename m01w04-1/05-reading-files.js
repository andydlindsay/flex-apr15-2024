const fs = require('fs');

// const fileContents = fs.readFileSync('./example.txt', { encoding: 'utf-8' });

// console.log(fileContents);

// error-first callbacks
// fs.readFile('./example.txt', { encoding: 'utf-8' }, function(err, fileContents) {
//   // console.log('err', err);
//   if (err) {
//     console.log(err);
//   }

//   console.log('fileContents', fileContents);
// });

fs.writeFile('./output.html', 'change the contents!', function() {
  console.log('the file has been created');
});

console.log('bottom of file');
