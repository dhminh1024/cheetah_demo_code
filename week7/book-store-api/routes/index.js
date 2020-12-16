var express = require("express");
var router = express.Router();

// All route of books
const bookAPI = require("./book.api");
router.use("/books", bookAPI);

// All route of favorites
const favoriteAPI = require("./favorite.api");
router.use("/favorites", favoriteAPI);

module.exports = router;
