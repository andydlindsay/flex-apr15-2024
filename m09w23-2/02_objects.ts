import {User} from './index';

const users: User[] = [];

const user: User = {
  id: 1,
  username: 'alice',
  password: '1234',
  pet: {
    breed: 'fox',
    name: 'hound'
  }
};

users.push(user);
// users.push({})

