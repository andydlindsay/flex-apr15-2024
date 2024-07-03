require('dotenv').config(); // takes info from .env and populates process.env

const express = require('express');
const client = require('./database/connection');

const app = express();
const port = 5050;

// GET /cats
app.get('/cats', (req, res) => {
  client.query('SELECT * FROM cats;')
    .then((response) => {
      const cats = response.rows;

      // res.render('cats', { cats })
      // res.redirect();
      // res.send();

      res.json(cats);
    });
});

// GET /cats/:id
app.get('/cats/:id', (req, res) => {
  const catId = req.params.id;
  client.query('SELECT * FROM cats WHERE id = $1;', [catId])
    .then((response) => {
      const cat = response.rows[0];

      res.json(cat);
    });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
