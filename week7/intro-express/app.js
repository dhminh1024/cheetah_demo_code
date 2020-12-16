const express = require("express");
const logger = require("morgan");
const app = express();
const port = 5000;

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/some", (req, res) => {
  const { name } = { ...req.query };
  res.send(`Good bye ${name}!`);
});

app.use((req, res, next) => {
  const error = new Error("Resource Not Found");
  error.statusCode = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(404).json({ message: error.message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
