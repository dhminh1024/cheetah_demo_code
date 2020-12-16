const express = require("express");
const favoriteController = require("../controllers/favorite.controller");
const router = express.Router();

/**
 * @route GET api/favorites
 * @description Get a list of favorites
 * @access Public
 */
router.get("/", favoriteController.getFavorites);

/**
 * @route POST api/favorites
 * @description Add a book to favorite list
 * @access Public
 */
router.post("/", favoriteController.addBookToFavorite);

module.exports = router;
