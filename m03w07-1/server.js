const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 4343;

// user database
const users = {
  abc: {
    id: "abc",
    username: "alice",
    password: "1234",
  },
  def: {
    id: "def",
    username: "bob",
    password: "5678",
  },
};

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev')); // logger
app.use(express.urlencoded({ extended: false })); // create and populate req.body
app.use(cookieParser()); // creates and populates req.cookies

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  // grab the username and password off of the body
  const username = req.body.username;
  const password = req.body.password;

  // did they NOT provide a username or password
  if (!username || !password) {
    return res.status(400).send('please provide both a username and a password');
  }

  // lookup the user based on their username
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      // we found our user!!!
      foundUser = user;
    }
  }

  // did we NOT find a user
  if (!foundUser) {
    return res.status(400).send('no user with that username found');
  }

  // do the passwords NOT match
  if (foundUser.password !== password) {
    return res.status(400).send('the passwords do not match');
  }

  // happy path!!!

  // set a cookie on the response object
  res.cookie('userId', foundUser.id);

  // send the user somewhere
  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  // grab the userId cookie from all cookies
  const userId = req.cookies.userId; // {}

  // do they NOT have a cookie?
  if (!userId) {
    return res.status(401).send('you need to be logged in to see this page');
  }

  // hooray! They have a cookie!
  const templateVars = {
    user: users[userId]
  };

  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the userId cookie
  res.clearCookie('userId');

  // redirect the user somewhere
  res.redirect('/login');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // grab the username and password from req.body
  const username = req.body.username;
  const password = req.body.password;

  // did they NOT provide a username and password
  if (!username || !password) {
    return res.status(400).send('you must provide a username and password');
  }

  // check to make sure that the username is unique
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      // uh oh we have a duplicate
      foundUser = user;
    }
  }

  // did we find a user?
  if (foundUser) {
    return res.status(400).send('that username is already in use');
  }

  // happy path! the username is unique
  const id = Math.random().toString(36).substring(2, 5); // generate a random 3 character string

  const newUser = {
    id: id,
    username: username,
    password: password
  };

  users[id] = newUser;
  console.log(users);

  // send the user to the login page? set the cookie and send them to the protected page?
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
