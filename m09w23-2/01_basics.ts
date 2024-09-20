let username: string | number | boolean = 'alice';

username = 'bob';
username = false;
username = 42;

const nums: (string | number | boolean)[] = [];

nums.push(1);
nums.push('hello');
nums.push(true);

const result = nums.pop();
