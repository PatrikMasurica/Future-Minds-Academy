const express = require("express");
const router = require("express").Router();
const booksRepository = require("../repositories/booksRepository");
const authMiddleware = require("../middleware/auth");

router.use(express.json());

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const book = booksRepository.getBookById(id);

  if (!book) {
    return res.status(404).json({
      success: false,
      error: "No book with that id",
    });
  }

  return res.status(200).json({
    success: true,
    data: book,
  });
});

router.get("/", (req, res) => {
  const books = booksRepository.getAllBooks();

  res.status(200).json({
    success: true,
    data: books,
  });
});

router.post("/", (req, res) => {
  let newBook = req.body;
  newBook = booksRepository.createBook(newBook);

  res.status(201).json({
    success: true,
    data: newBook,
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updated = booksRepository.editBook(id, req.body);

  if (updated) {
    return res.status(204).json({
      success: true,
      data: updated,
    });
  }

  res.status(404).json({
    success: false,
    error: "Book with this id doesnt exist",
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  booksRepository.deleteBook(id);

  res.status(200).json({
    success: true,
  });
});

module.exports = router;
