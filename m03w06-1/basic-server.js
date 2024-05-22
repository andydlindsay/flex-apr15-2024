const http = require('http');

const server = http.createServer();

const port = 4004;

server.on('request', (request, response) => {
  console.log('someone made a request to the server');

  console.log(request.method, request.url);

  if (request.method === 'GET' && request.url === '/home') {
    response.write('this is the home page');
  } else if (request.method === 'GET' && request.url === '/about') {
    response.write('see more about us here!');
  } else {
    response.write('404 this is not the page you are looking for');
  }

  response.end(); // send the response to the browser
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
