const express = require("express");
const booksController = require("./controllers/bookController");
const app = express();

app.use("/books", booksController);

app.listen(8585);
