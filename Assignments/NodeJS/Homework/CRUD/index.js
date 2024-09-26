const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(bodyParser.json());

// MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "patrik",
    password: "Patrikmasurica.123",
    database: "school",
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL server.');
});

// CRUD Operations

// POST /books: Add a new book to the library.
app.post('/books', (req, res) => {
    const { title, author, genre, rating, year } = req.body;
    const query = 'INSERT INTO books (title, author, genre, rating, year) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [title, author, genre, rating, year], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ id: results.insertId, ...req.body });
    });
});

// GET /books: Retrieve a list of all books.
app.get('/books', (req, res) => {
    const query = 'SELECT * FROM books';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(results);
    });
});

// PUT /books/:id: Update the information for a specific book.
app.put('/books/:id', (req, res) => {
    const { title, author, genre, rating, year } = req.body;
    const { id } = req.params;
    const query = 'UPDATE books SET title = ?, author = ?, genre = ?, rating = ?, year = ? WHERE id = ?';
    connection.query(query, [title, author, genre, rating, year, id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send({ message: 'Book updated successfully.' });
    });
});

// DELETE /books/:id: Remove a book from the library.
app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM books WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send({ message: 'Book deleted successfully.' });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
