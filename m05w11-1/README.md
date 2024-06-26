# M05W11 - SQL Intro

### To Do
- [x] Introduction to RDBMS
- [x] The Relational Data Model (Tables, Columns, Rows)
- [x] `SELECT` Statements
- [x] Filtering and ordering
- [x] Joining tables
- [x] Grouping records
- [x] Aggregation functions
- [x] `LIMIT` and `OFFSET`

### Database
* collection of tables

### Relational Database
* collection of tables each table is related to one or more other tables

### Primary Key
* unique identifier for a particular record

### Foreign Key
* is a table's primary key stored in another table

|ID|Menu Item|Calories|Price|
|---|---|---|---|
|1|Big Mac|900|7.99|
|2|Large Fries|1000|4.99|

row === record
column === field

```js
const urlDatabase = {
  b2xVn2: {
    longURL: 'http://www.google.com',
    userId: 'abc'
  }
}

const users = {
  abc: {
    id: 'abc',
    email: '',
    password: ''
  }
};
```

### What is Postgres?
* Relational Database Management System (RDBMS)
* server can hold multiple relational databases

psql
\l
\c users

client <======= tcp/http ======> server <======= tcp/postgres ======> RDBMS















### SELECT Challenges

For the first 5 queries, we'll be using the `users` table.

![users table](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/w5d1-users.io.png)

1. List total number of users

```sql
SELECT COUNT(id) AS num_users
FROM users;
```

2. List users over the age of 18

```sql
SELECT *
FROM users
WHERE age > 18;
```

3. List users who are over the age of 18 and have the last name 'Barrows'

```sql
SELECT *
FROM users
WHERE last_name = 'Barrows' AND age > 18;
```

4. List users over the age of 18 who live in Canada sorted by age from oldest to youngest and then last name alphabetically

```sql
SELECT *
FROM users
WHERE age > 18 AND country = 'Canada'
ORDER BY age DESC, last_name;
```

5. List users who live in Canada and whose accounts are overdue

```sql
SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < 'June 25, 2024';

-- this query uses the NOW function
SELECT *
FROM users -- query the users table
WHERE country = 'Canada' AND payment_due_date < NOW();
```

For the rest of the queries, we'll be using the `albums` and `songs` tables.

![albums and songs](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/albums-and-songs.png)

6. List all albums along with their songs

```sql
SELECT *
FROM albums
JOIN songs ON albums.id = album_id;
```

7. List all albums along with how many songs each album has

```sql
SELECT album_name, artist_name, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs ON albums.id = album_id
GROUP BY album_name, artist_name;
```

8. Enhance previous query to only include albums that have more than 10 songs

```sql
SELECT album_name, artist_name, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs ON albums.id = album_id
GROUP BY album_name, artist_name
HAVING COUNT(songs.id) > 10;
```

9. List ALL albums in the database, along with their songs if any

```sql
--SELECT *
--FROM albums
--LEFT JOIN songs ON albums.id = album_id;

SELECT *
FROM songs
RIGHT JOIN albums ON albums.id = album_id;
```

10. List ONLY the first 10 songs from the songs table

```sql
SELECT *
FROM songs
LIMIT 10;
```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)
