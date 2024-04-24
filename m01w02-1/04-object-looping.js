const names = ['alice', 'bob', 'carol'];

// c-style loop
// for (let i = 0; i < names.length; i++) {
//   const value = names[i];
//   console.log(value);
//   i += 2
// }

// for..in loop loops through the indexes
// for (const index in names) {
//   const value = names[index];
//   console.log(value);
// }

// for..of loops through the values
// for (const name of names) {
//   console.log(name);
// }

// you can only use for..in to loop directly through an object
const myObj = { 'a': 1, 'b': 2, 'c': 3 };

for (const key in myObj) {
  console.log('key', key);
  console.log('value', myObj[key]);
}
