const express = require("express");
const booksController = require("./controllers/bookController");
const authController = require("./controllers/authController");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    preflightContinue: true,
  })
);

app.use("/books", booksController);
app.use("/auth", authController);

app.listen(8585);