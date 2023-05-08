const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose"); //MongoDB
const methodOverride = require('method-override');
//var bodyParser = require("bodyParser");
require("dotenv/config");

const indexRouter = require("./routes/index.js");
const starsRouter = require("./routes/stars.js");
const bodyParser = require("body-parser");

const app = express();

app.use(methodOverride('_method'));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//To można usunąć jak nie będzie gówno działać...
//app.get("/", (req, res) => {
//  res.render("./routes/index");
//});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/stars", starsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// DB connection (Połączenie z bazą danych)
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected (Baza danych połączona)");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
