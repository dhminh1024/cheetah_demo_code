var express = require("express");
var router = express.Router();

// All route of Meme
const weatherAPI = require("./weather.api");
router.use("/weather", weatherAPI);

module.exports = router;
