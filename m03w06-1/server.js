const express = require('express');
const morgan = require('morgan');

const app = express();

const port = 4004;

// middleware
app.use((request, response, next) => {
  request.secretMessage = 'hello world';

  next(); // call the next piece of middleware or our route handler
});

app.use(morgan('dev'));

// const morganMiddleware = morgan('dev'); // (req, res, next) => {}
// app.use(morganMiddleware);

// GET /home
app.get('/home', (request, response) => {
  // console.log(request.secretMessage);

  response.status(201);

  response.send('welcome to the home page'); // .write and .end together
});

// GET /about
app.get('/about', (req, res) => {
  res.status(202);

  if (true) {
    return res.send('here is more info about us');
  }

  res.send('here is more info about us');

  // res.status(300).send('here is the response');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
