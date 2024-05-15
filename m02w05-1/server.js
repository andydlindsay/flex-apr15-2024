const net = require('net');

// console.log(net);

const server = net.createServer();
const port = 7001;

// console.log(server); // Server

const connections = [];

server.on('connection', (connection) => {
  console.log('someone connected to the server');

  // add this connection to our collection
  connections.push(connection);

  // console.log(connection);

  // set the encoding on the connection object
  connection.setEncoding('utf-8');

  // send something to the client that just connected
  connection.write('hello there!');
  
  // listen for incoming communication/data
  connection.on('data', (data) => {
    console.log('client says:', data);

    if (data.includes('Name:')) {
      console.log('user wants to set their name');
      const username = data.split(' ')[1]; // 'alice'
      connection.username = username;
      return;
    }

    // loop through all current connections and echo the data to each one
    for (const conn of connections) {
      if (conn !== connection) {
        conn.write(`${connection.username} says: ${data}`);
      }
    }
  });
});

server.listen(port, () => {
  console.log(`tcp server is running on port ${port}`);
});
