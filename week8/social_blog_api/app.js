var express = require("express");
require("dotenv").config();
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
const { AppError, sendResponse } = require("./helpers/utils.helper");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect(MONGODB_URI, {
    // to get rid of deprecated warning
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongoose connected to ${MONGODB_URI}`);
    // require("./models/testSchema");
  })
  .catch((err) => console.log(err));

app.use("/api", indexRouter);

// catch 404 and forard to error handler
app.use((req, res, next) => {
  next(new AppError(404, "Resource not found", "Resource not found"));
});

app.use((err, req, res, next) => {
  console.log("ERROR", err);
  if (err.isOperational) {
    return sendResponse(
      res,
      err.statusCode,
      false,
      null,
      { message: err.message },
      err.errorType
    );
  } else {
    return sendResponse(
      res,
      500,
      false,
      null,
      { message: err.message },
      "Internal Server Error"
    );
  }
});

module.exports = app;
