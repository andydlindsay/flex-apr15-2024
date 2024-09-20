// if it looks like a duck, and walks like a duck, and quacks like a duck, then it must be a duck

interface PotentialUser {
  username: string;
  password: string;
}

const login = (user: PotentialUser): boolean => {
  return true;
}

const myUser = {
  username: 'alice',
  password: '1234',
  anotherKey: 'hello'
};

login(myUser);
