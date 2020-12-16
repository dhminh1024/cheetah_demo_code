const api = require("../helpers/api.servive");
const weatherController = {};

weatherController.getWeatherData = async (req, res, next) => {
  try {
    // TODO
    const { lat, lon } = { ...req.query };
    const response = await api.get(`/weather?lat=${lat}&lon=${lon}`);
    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
};

module.exports = weatherController;
