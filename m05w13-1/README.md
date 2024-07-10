# M05W13 - Mid-term Project Kickoff

### what is the point?
* reinforce what you already know
* learning to work as a team

### Pick a project

### User Story
* As a _____, I can _____, because ______

* As a logged in user, I can see a list of available maps, because I'm interested in things in my area
* As a logged in user, I can add pins to a map, because I want to share with others

end-to-end testing

/planning/user-stories.md

### Identify the nouns
* nouns === table
* ERD

/planning/erd.png
/planning/erd-stretch.png

### Routes
* RESTful routing

GET /all-the-users
POST /create-a-new-user

POST /register
POST /logout

Browse  GET   /users
Read    GET   /users/:id
Edit    POST  /users/:id
Add     POST  /users
Delete  POST  /users/:id/delete

### MVP
* Minimum Viable Product
* minimum feature set that a user would get value from
* @KV Minimum Viable Demo
* what is the minimum feature set that we can demo in 5 mins
* if you're not going to show it, don't build it

### Wireframes/Mockups

/planning/wireframes/home.png
/planning/wireframes/about.png

### User Registration and Full Login
* don't do it

```js
// localhost:8080/login/2
app.get('/login/:id', (req, res) => {
  // encrypted cookies
  req.session.userId = req.params.id;

  // plaintext cookies
  res.cookie('userId', req.params.id);

  // redirect the user somewhere
  res.redirect('/');
});
```

### Tech Stack
* Back end: Node, Express, Postgres
* Front end: HTML, CSS, JS, jQuery, bootstrap, tailwind, SCSS


1. create a .scss file in /styles (layout.scss)
2. add a Link tag to the html that makes a request for the .css version of the file (layout.css)
3. automatically compile your .scss into .css and put it in the public directory
4. express static middleware will serve it up

### Dividing up the work
* horizontal => each dev works on their own layer of the app (FE, BE, or DB)
* vertical => each dev works on a slice of the whole app (FE, BE, and DB)
* pair programming

### MPA and SPA
* totally up to you
* not mutually exclusive

### Communication
* scrum channel



