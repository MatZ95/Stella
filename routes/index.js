var express = require("express");
var router = express.Router();
var schemas = require("../models/schemas.js");

router.get("/", async (req, res) => {
  let stars = schemas.stars;

    await stars.find({}).then((starsData) => {
    res.render("index", { title: "Stella", stars: starsData });
  });
});

module.exports = router;
