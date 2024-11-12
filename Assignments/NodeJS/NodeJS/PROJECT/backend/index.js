const express = require("express");
const booksController = require("./controllers/bookController");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    preflightContinue: true,
  })
);

app.use("/books", booksController);

app.listen(8585);
