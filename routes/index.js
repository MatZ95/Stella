var express = require("express");
var router = express.Router();
var schemas = require("../models/schemas.js");

/* GET home page. */
router.get("/", async (req, res) => {
  let stars = schemas.stars;

  let starsResult = await stars.find({}).then((starsData) => {
    res.render("index", { title: "Stella", data: starsData });
  });
});

module.exports = router;
