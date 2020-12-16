const express = require("express");
const weatherController = require("../controllers/weather.controler");
const router = express.Router();

/**
 * @route GET api/weather
 * @description Get weather data
 * @access Public
 */
router.get("/", weatherController.getWeatherData);

module.exports = router;
