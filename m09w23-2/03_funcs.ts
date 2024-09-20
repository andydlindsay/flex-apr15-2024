// name of the function, arguments, return value

const sayHello = (name: string, age?: number): string => {
  return `hello ${name}`;
};

sayHello('alice');
sayHello('alice', 100);

const returningPromise = (num: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('hello world');
  });
};

returningPromise(42)
  .then((data) => {});
