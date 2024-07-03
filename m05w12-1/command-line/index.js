const pg = require('pg');

const Client = pg.Client; // one connection to the rdbms
// const Pool = pg.Pool; // collection of clients (5); managed

const config = {
  host: 'salt.db.elephantsql.com',
  port: 5432,
  database: 'ejvaiama',
  user: 'ejvaiama',
  password: '1r5PEN8JLab5XwLmTJhr7CFCnk9soH0L'
};

const client = new Client(config); // new Pool(config)

const verb = process.argv[2];
// console.log('verb', verb);
const id = process.argv[3];

client.connect(); // tries to connect

// client.query();
// pool.query();

switch(verb) {
  case 'browse':
    const query = 'SELECT * FROM cats;';
    client.query(query)
      .then((response) => {
        console.log(response.rows); 
        client.end(); // end the database connection
      })
      .catch((err) => {
        console.log('err', err); // connection terminated
      });
    break;

    // xss alert()
  case 'read':
    // prepared statement => query string and parameters/args passed as two separate pieces
    client.query('SELECT * FROM cats WHERE id = $1;', [id])
      .then((response) => {
        console.log(response.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newName = process.argv[4];
    client.query('UPDATE cats SET name = $1 WHERE id = $2;', [newName, id])
      .then(() => {
        console.log('cat was updated successfully');
        client.end();
      });
    break;

  case 'add':
    const name = process.argv[3];
    const breed = process.argv[4];
    client.query('INSERT INTO cats (name, breed) VALUES ($1, $2);', [name, breed])
      .then(() => {
        console.log('cat was created!');
        client.end();
      });
    break;

  case 'delete':
    client.query('DELETE FROM cats WHERE id = $1;', [id])
      .then(() => {
        console.log('cat was adopted');
        client.end();
      });
    break;

  default:
    console.log('please use a BREAD verb');
    client.end();
}



