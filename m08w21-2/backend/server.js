const express = require('express');
const app = express();
const port = 8001;

const books = require('./data/books');

// middleware
app.use(express.static('../frontend/build')); // magic only happens on '/' or root

// GET /books
app.get('/api/books', (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
