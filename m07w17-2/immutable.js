// const arr = [1,2,3];
// const another = [4,5,6];

// // const copy = arr.map((element) => { return element });
// // const copy = arr.filter(() => { return true });

// // spread operator ...

// const copy = [ 4, ...arr ];

// // copy.push(4);

// console.log(arr);
// console.log(copy);

const userOne = {
  username: 'alice',
  age: 42,
  faveFoods: ['breakfast cereal']
};

// const { username } = { ...userOne };
// console.log(username);

const copy = {
  ...userOne,
  username: 'bob',
  faveFoods: [
    ...userOne.faveFoods,
    'waffles'
  ]
};

// copy.username = 'bob';
// copy.faveFoods.push('waffles')

console.log(userOne);
console.log(copy);
