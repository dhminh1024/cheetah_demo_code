const express = require("express");
const bookController = require("../controllers/book.controller");
const router = express.Router();

/**
 * @route GET api/books
 * @description Get a list of books
 * @access Public
 */
router.get("/", bookController.getBooks);

/**
 * @route GET api/books/:id
 * @description Get a single book
 * @access Public
 */
router.get("/:id", bookController.getSingleBook);

module.exports = router;
