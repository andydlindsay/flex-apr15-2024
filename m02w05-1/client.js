const net = require('net');

const config = {
  port: '7001',
  host: 'localhost'
};

const connection = net.createConnection(config);

// set the encoding on the connection object
connection.setEncoding('utf-8');

// console.log(connection);

// listen for incoming messages/data
connection.on('data', (data) => {
  console.log('server says:', data);
});

// set the encoding on stdin
process.stdin.setEncoding('utf-8');

// listen for the user to type something in to stdin
process.stdin.on('data', (data) => {
  connection.write(data);
});
