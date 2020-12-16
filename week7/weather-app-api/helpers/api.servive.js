const axios = require("axios");

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appid: process.env.API_KEY,
  },
});

module.exports = api;
